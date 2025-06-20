import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Register from './pages/Register' // <== Импортируешь компонент

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} /> {/* Показываем Register на главной */}
    </Routes>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
