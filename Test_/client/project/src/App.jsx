import { useState } from 'react';
import './App.css';
import axios from "axios";
import { useEffect } from 'react';



function App() {
  const [msg, setMsg] = useState("");
  let fetchData=async()=>{
    let response=await fetch("http://localhost:8080/api");
    let data=await response.json();
    console.log(data);
  }

  

  return (
    <>
      <h2>Backend-Message</h2>
      <p>{msg}</p>
      <button onClick={fetchData}>Fetch</button>
    </>
  )
}

export default App
