import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Lesson2 from './pages/Lesson2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/sanskrit-gita-learn/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lesson/2" element={<Lesson2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
