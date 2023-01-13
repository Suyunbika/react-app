import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <p>paragraph</p>

      <Footer />
    </div>
  )
}

export default App
