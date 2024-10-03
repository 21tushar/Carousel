import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SimpleSlider from './App'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleSlider />
  </StrictMode>,
)
