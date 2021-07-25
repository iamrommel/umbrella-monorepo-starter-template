import React, { useContext as useContextCore } from 'react'

const context = React.createContext()
const CoreProvider = context.Provider

export const Provider = ({ children, ...props }) => {
  return <CoreProvider value={{ ...{ ...props } }}>{children}</CoreProvider>
}

export const useContext = () => useContextCore(context)
