import React, { createContext, useContext, useState } from 'react'

const FlashContext = createContext(null)

export function FlashProvider({ children }) {
  const [showFlash, setShowFlash] = useState(false)

  return (
    <FlashContext.Provider value={{ showFlash, setShowFlash }}>
      {children}
    </FlashContext.Provider>
  )
}

export function useFlash() {
  const ctx = useContext(FlashContext)
  if (!ctx) throw new Error('useFlash must be used inside FlashProvider')
  return ctx
}

export default FlashContext
