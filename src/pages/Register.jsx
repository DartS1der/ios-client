import { useState } from 'react'
import API from '../api'

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '', token: '' })
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await API.post('/register', form)
      window.location = '/login'
    } catch { alert('Ошибка регистрации') }
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 p-6 bg-white shadow rounded space-y-4">
      <h1 className="text-xl font-bold">Регистрация</h1>
      <input name="username" placeholder="Имя" onChange={handleChange} className="border p-2 w-full" />
      <input name="password" type="password" placeholder="Пароль" onChange={handleChange} className="border p-2 w-full" />
      <input name="token" placeholder="Токен контроллера" onChange={handleChange} className="border p-2 w-full" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Зарегистрироваться</button>
      <a href="/login" className="block text-blue-600">Уже есть аккаунт?</a>
    </form>
  )
}