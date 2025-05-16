import { useState } from 'react'
import { NewsLetter } from './Newsletter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewsLetter/>
    </>
  )
}

export default App
