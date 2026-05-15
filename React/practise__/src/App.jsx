import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [formData,setFormData] = useState({
    name:"",
    username:"",
    password:"",
    remarks:""
  })

  
  
  function handleinputChange(e){
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }

  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form Data",formData);
    setFormData({
      name:"",
      username:"",
      password:"",
      remarks:""
    });
  }

  let [task,setTask] = useState(["DSA","NexCare"]);
  let  [taskInput,setTaskInput] = useState("");

  let handleTask=(e)=>{
    e.preventDefault();
    setTask([...task, taskInput]);
    setTaskInput("");
  }

  let handleDeleteAll=(e)=>{
    setTask([]);
  }

  let upperCaseAll=(e)=>{
    setTask(task.map((t)=>{
      return t.toUpperCase();
    }))
  }
  
  let handleDelete=(index)=>{
    setTask(task.filter((_, i) => i !== index));
  }

  let handleUpper=(index)=>{
    setTask(task.map((t,idx)=>{
      if(idx===index){
        return t.toUpperCase();
      }else{
        return t
      }
    }))
  }


  return (
    <>
    <center>
     <div className='main'>
      Form Submission React
      <br /><br />
      <input type="text" placeholder="Enter your name" name='name' value={formData.name} onChange={handleinputChange}/> <br /><br />
      <input type="text" placeholder='Enter your username' name='username' value={formData.username} onChange={handleinputChange}/> <br /><br />
      <input type="password" placeholder='Enter your password' name='password' value={formData.password} onChange={handleinputChange}/><br /><br />
      <input type="text" placeholder='Enter your remarks' name='remarks' value={formData.remarks} onChange={handleinputChange}/><br /><br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
     </div>




     <br /><br />
     <hr />

     <h1>Welcome to Todo Practise App</h1>

     <h3>Add new Task</h3>
     <br />
     <input type="text" placeholder='Add new task' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} value={taskInput} />
     <button onClick={handleTask}>AddTask</button>


     <h2>Task Pending</h2>
     <ul>
      {task.map((task, index) => (
        <li key={index}>{task} &nbsp;&nbsp;&nbsp;&nbsp; <button onClick={() => handleDelete(index)}>DeleteOne &nbsp;&nbsp;</button><button onClick={()=>handleUpper(index)}>Upper</button></li>
      ))}
     </ul>

<br />
     <button onClick={handleDeleteAll}>Delete_All</button>
     <button onClick={upperCaseAll}>Upper Case All</button>

     
     </center>
    </>
  )
}

export default App;