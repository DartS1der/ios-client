// src/pages/Login.jsx
import { useState } from 'react'
import API from '../api'

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' })
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await API.post('/token', form)
      localStorage.setItem('access_token', res.data.access_token)
      window.location = '/settings'
    } catch {
      alert('Ошибка авторизации')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 p-6 bg-white shadow rounded space-y-4">
      <h1 className="text-xl font-bold">Вход</h1>
      <input name="username" placeholder="Имя" onChange={handleChange} className="border p-2 w-full" />
      <input name="password" type="password" placeholder="Пароль" onChange={handleChange} className="border p-2 w-full" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Войти</button>
      <a href="/register" className="block text-blue-600">Нет аккаунта?</a>
    </form>
  )
}
