export function setToken(token) { localStorage.setItem('access_token', token) }
export function getToken() { return localStorage.getItem('access_token') }
export function logout() { localStorage.removeItem('access_token'); window.location = '/login' }