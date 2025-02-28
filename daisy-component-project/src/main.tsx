import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <div className="py-10 mx-auto">
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>,
)
