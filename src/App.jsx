import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import { getToken } from './auth'

function RequireAuth({ children }) {
  return getToken() ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={
          <RequireAuth><Settings /></RequireAuth>
        } />
        <Route path="*" element={<Navigate to={getToken() ? "/settings" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  )
}