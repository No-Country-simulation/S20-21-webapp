import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='text-3xl text-center text-red-600'>
      HOLA
    </div>
  </StrictMode>,
)
