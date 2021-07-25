import React from 'react'
import { useUserLogout } from '../hooks/useUserLogout'

export const Logout = ({ children, className }) => {
  const onLogout = useUserLogout()

  return (
    <a
      href="#"
      className={className}
      onClick={async (e) => {
        e.preventDefault()
        await onLogout()
      }}
    >
      {children}
    </a>
  )
}
