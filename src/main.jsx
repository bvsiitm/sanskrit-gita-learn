import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Interlude from './pages/Interlude'
import Lesson2 from './pages/Lesson2'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/sanskrit-gita-learn/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/interlude" element={<Interlude />} />
        <Route path="/lesson/2" element={<Lesson2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
