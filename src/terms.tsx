import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TermsOfUse from './TermsOfUse'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TermsOfUse />
  </StrictMode>,
)
