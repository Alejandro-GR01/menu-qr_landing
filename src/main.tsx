import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { OSProvider } from '@/context/OSProvider'
import App from '@/App'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <OSProvider>
        <App />
      </OSProvider>
    </BrowserRouter>
  </StrictMode>,
)