import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Register from './pages/Register'
import Login from './pages/Login'
import Settings from './pages/Settings'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1 className="text-3xl font-bold text-center mt-20">IoT Client Works!</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
