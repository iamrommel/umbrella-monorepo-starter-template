import React, { useContext as useContextCore } from 'react'

const context = React.createContext()
const CoreProvider = context.Provider

export const Provider = ({ children, ...props }) => {
  const [newUser, setNewUser] = React.useState({})
  const [error, setError] = React.useState(null)
  return <CoreProvider value={{ ...props, newUser, setNewUser, error, setError }}>{children}</CoreProvider>
}

export const useContext = () => useContextCore(context)
