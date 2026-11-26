import { useState } from 'react'
import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Register from './screens/Register'

export default function App() {
  const [screen, setScreen] = useState('welcome')

  if (screen === 'login') {
    return <Login onRegister={() => setScreen('register')} />
  }

  if (screen === 'register') {
    return <Register onLogin={() => setScreen('login')} />
  }

  return (
    <Welcome
      onLogin={() => setScreen('login')}
      onRegister={() => setScreen('register')}
    />
  )
}