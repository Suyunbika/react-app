import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Header} from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Header />
      <h1>Hello</h1>
      <p>paragraph</p>
    </div>
  )
}

export default App
