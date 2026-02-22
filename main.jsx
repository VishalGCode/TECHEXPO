import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import { FlashProvider } from './FlashContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FlashProvider>
      <App />
    </FlashProvider>
  </React.StrictMode>
)
