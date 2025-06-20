import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1 className="text-3xl font-bold underline">IoT Client Works!</h1>} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)