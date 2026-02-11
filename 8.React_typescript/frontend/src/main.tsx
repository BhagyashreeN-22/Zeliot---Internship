import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './components/Todo/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Todo/>
  <Todo/>
  <Todo/>
  <Todo/>
  </StrictMode>,
)
