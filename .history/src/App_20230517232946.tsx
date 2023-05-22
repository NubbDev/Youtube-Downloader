import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './components/Menu/Tab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tab/>
    </>
  )
}

export default App
