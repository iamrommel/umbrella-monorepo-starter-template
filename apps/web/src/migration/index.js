import { Migrator } from 'pcmli.umbrella.backend'
import { MigrationUtils } from './MigrationUtils'

const runner = async ({ instance }) => {
  //run all migration in ascending order inside the scripts folder
  for (const file of MigrationUtils.loadFile()) {
    const scriptFile = require('./scripts/' + file).default
    const scriptValue = scriptFile({ migrator: instance })
    await instance.runTask({ name: '_migration_errors', ...scriptValue, migrationName: file })
  }
}

/**
 * During production it will be run independently, this is no included on production scripts too
 * During development, it is always run before the actual start and build of the project
 * This migration is being controlled via npm scripts now
 *
 */
export const runMigration = () => {
  const func = async () => {
    const migrator = new Migrator({ uri: process.env.MONGO_URL })
    await migrator.migrate({ runner })

    //this will terminate the migrations script to signal that is is done
    process.exit()
  }

  func().catch((e) => console.error(e?.message))
}

//run it once
runMigration()
