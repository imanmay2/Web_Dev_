import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function add(){
    
  }
  return (
    <div>
      <input type="text" /> <br />
      <button onClick={add}>Add Task</button>
      <hr width="400px"/>
      <h2>Tasks Todos</h2>
    </div>
  )
}

export default App
