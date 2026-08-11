import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './nvct-website-react.tsx'
import About from './about.tsx'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Home />} />
                <Route path ="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
