import * as path from 'path'
import * as fs from 'fs'

export const MigrationUtils = {
  /**
   * just loop the operation for all tenants
   * @param taskFn
   * @returns {Promise<[]>}
   */
  runForAllTenant: async (taskFn) => {
    const results = []
    for (const tenant of MigrationUtils.tenants) {
      const result = await taskFn({ tenant })
      results.push(result)
    }

    return results
  },
  tenants: ['DFT'],

  loadFile: () => {
    try {
      const defaultFolder = './scripts'
      const scriptsFolder = path.join(__dirname, defaultFolder)

      const files = fs.readdirSync(scriptsFolder)

      return files ?? []
    } catch (e) {
      console.info(e.message)
      return []
    }
  },
}
