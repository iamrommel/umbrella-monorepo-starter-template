import { useLocalStorage } from '../web-ui'
import { Utils } from 'pcmli.umbrella.uni-core'

export const useUserLogout = () => {
  const userIdKey = 'totalmilk-login-userId'
  const tokenKey = 'totalmilk-login-token'
  const storage = useLocalStorage()

  let accessToken = null
  if (Utils.hasWindow()) accessToken = storage?.get?.(tokenKey)

  const logout = async () => {
    //clean the storage after the logout
    storage.remove(tokenKey)
    storage.remove(userIdKey)

    window.location.href = `/logout/${encodeURIComponent(accessToken)}`
  }

  return logout
}
