import { defaultConnection } from 'pcmli.umbrella.backend'
import { Setting } from './setting'

//start the connection
export let appConnection = null

export const setupMongoose = async () => {
  appConnection = await defaultConnection(Setting.appSettings)

  return { appConnection }
}
