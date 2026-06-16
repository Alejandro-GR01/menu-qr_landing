import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { OSProvider } from '@/context/OSContext'
import App from '@/App'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OSProvider>
      <App />
    </OSProvider>
  </StrictMode>,
)
