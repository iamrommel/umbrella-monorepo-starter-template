#!/usr/bin/env node

const execa = require('execa')
const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')
const util = require('util')
const glob = util.promisify(require('glob'))
const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')

const rootDir = process.cwd()
const rootPackageJsonPath = path.join(rootDir, 'package.json')
const rootPackageJson = JSON.parse(fs.readFileSync(rootPackageJsonPath))

async function appPackageJsons() {
  const appPackageJsonPaths = await glob('apps/*/package.json')

  return appPackageJsonPaths.map((m) => {
    const filePath = path.join(rootDir, m)

    const directory = `./apps/${path.basename(path.dirname(filePath))}`

    const packageJson = JSON.parse(fs.readFileSync(filePath))

    return { filePath, packageJson, directory }
  })
}

async function setupThePackageJsonFiles() {
  //delete the workspace fields
  const cleanedRootPackageJson = _.omit(rootPackageJson, ['workspaces'])

  //save the changes to file
  saveFile(rootPackageJsonPath, cleanedRootPackageJson)

  //copy the dependencies to target package json
  const appJson = await appPackageJsons()
  for (const { filePath, packageJson } of appJson) {
    //merge the root dependencies
    const dependencies = _.merge({}, packageJson.dependencies, rootPackageJson.dependencies)
    const devDependencies = _.merge({}, packageJson.devDependencies, rootPackageJson.devDependencies)

    //merge the changes as the final json
    const newAppJson = _.merge({}, packageJson, { dependencies, devDependencies })

    //save the file
    saveFile(filePath, newAppJson)
  }
}

async function revertChanges() {
  await exec('git reset --hard')
}

async function hasUnCommitedChanges() {
  //const { stdout } = execa('git status --porcelain')
  //const result = await exec('git status --porcelain')
  //await exec('git update-index --refresh')
  await exec('git diff --exit-code')

  //console.log(stdout)

  //return result?.exitCode === 1
}

function saveFile(path, jsonObject) {
  fs.writeFileSync(path, JSON.stringify(jsonObject, null, 2))
}
async function exec(command) {
  return execa(command, { shell: true, stdio: 'inherit' })
}

const init = () => {
  console.log(chalk.yellow(figlet.textSync('>>>--- MyHublet ---->>>', {})))
}

const askQuestions = () => {
  const questions = [
    {
      name: 'shouldDeploy',
      type: 'list',
      choices: ['No', 'Yes'],
      message: 'Do you want to start deployment now?',
    },
  ]
  return inquirer.prompt(questions)
}

const success = () => {
  console.log(chalk.green(figlet.textSync(' --- SUCCESS --- ', {})))
}

const noDeploy = () => {
  console.log(chalk.redBright(figlet.textSync(' --- NO DEPLOY --- ', {})))
}

const run = async () => {
  const argv = require('yargs/yargs')(process.argv.slice(2)).argv
  const line = argv?.line || 'deploy'

  if (await hasUnCommitedChanges()) {
    throw new Error('Cannot continue because there still uncommited changes')
  }

  // show script introduction
  init()

  // ask questions
  const { shouldDeploy } = await askQuestions()

  // create the file
  if (shouldDeploy === 'Yes') {
    await exec(`lerna run ${line} --stream --scope "${argv?.scope}"`)

    success()
  } else {
    noDeploy()
  }

  // show success message
}

run()
