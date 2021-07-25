import { useUser as useUserCore } from 'pcmli.umbrella.core'
import { Utils } from 'pcmli.umbrella.uni-core'
import { useLocalStorage } from '../web-ui'

export const useUser = ({ ...rest } = {}) => {
  const userIdKey = 'totalmilk-login-userId'
  const storage = useLocalStorage()

  let _id = null
  if (Utils.hasWindow()) _id = storage?.get?.(userIdKey)

  const userResult = useUserCore({ _id, ...rest })

  return { ...userResult }
}
