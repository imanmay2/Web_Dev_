import './App.css'
import {Heading} from './components/Heading';
import {Title} from './components/Title';
import {Head} from './components/Head';
import { useState } from 'react';
function App() {

  let [task,setTask]=useState(["Computer Networks","CN"]);
  let [done,setDone]=useState(["MPMC"]);
  let [t,setT]=useState("");

  let handleTaskChange=(event)=>{
    setT(event.target.value);
  }

  let addTask=()=>{
    
      setTask((task)=>{
      return([...task,t]);
    })
    setT("");
  }
  
  return (
    <>
    {/* Todo Aplication just for practise. */}
    <div className="container">
      <Heading name={"Task Tracker"}/>
      <Title title={"Stay organized with your daily tasks."}/>
       <br />
      <div className="placeholder">
        <input type="text" placeholder='Enter your task' value={t} className='inp1' onChange={handleTaskChange}/>
        <button className='add' onClick={addTask}>ADD</button>
      </div>
      <br />
      <Head name={"Pending Task"}/>
      <div className='pendingTask'>
        <ul>
        {task.map((task,idx)=>{
          return(
            <li key={idx}>{task} <button>Delete</button> <button>Completed</button></li>
          )
        })}
        </ul>
      </div>
      <br />
      <Head name={"Completed Task"}/>
      <div className='doneTask'>
        <ul>
        {done.map((task,idx)=>{
          return(
            <li key={idx}>{done} <button>Delete</button></li>
          )
        })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App