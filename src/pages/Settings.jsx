import { useEffect, useState } from 'react'
import API from '../api'
import { logout } from '../auth'

export default function Settings() {
  const [config, setConfig] = useState({})
  const fetchConfig = async () => {
    const { data } = await API.get('/me/config')
    setConfig(data)
  }
  useEffect(() => { fetchConfig() }, [])

  const handleChange = e => setConfig({ ...config, [e.target.name]: e.target.value })
  const handleSubmit = async e => {
    e.preventDefault()
    await API.post('/me/config', config)
    alert('Сохранено')
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl mb-4">Настройки контроллера</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="led" placeholder="LED" value={config.led || ''} onChange={handleChange} className="border p-2 w-full" />
        <input name="threshold" placeholder="Порог" value={config.threshold || ''} onChange={handleChange} className="border p-2 w-full" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Сохранить</button>
      </form>
      <button onClick={logout} className="mt-4 text-red-500">Выйти</button>
    </div>
  )
}