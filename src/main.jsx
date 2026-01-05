import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n' // <--- زۆر گرنگە ئەمە لێرە بێت بۆ ئەوەی زمانەکە کار بکات

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
