// src/pages/Settings.jsx
import { useEffect, useState } from 'react'
import API from '../api'

export default function Settings() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await API.get('/me') // эндпоинт должен возвращать данные текущего пользователя
        setUser(res.data)
      } catch {
        window.location = '/login'
      }
    }
    load()
  }, [])

  if (!user) return <p className="text-center mt-10">Загрузка...</p>

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Настройки</h1>
      <p><strong>Имя пользователя:</strong> {user.username}</p>
      <p><strong>Контроллер:</strong> {user.token}</p>
    </div>
  )
}
