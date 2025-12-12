import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App.tsx'
import { ThemeProvider, AdminProvider } from './app/providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </ThemeProvider>
  </StrictMode>,
)
