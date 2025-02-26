import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo(){

    let [arr,setArr]=useState([{Task:"Sample-task",id:uuidv4()},{Task:"Programming",id:uuidv4()}]);
    let [task,setTask]=useState("");

    let trackChange=(event)=>{
        setTask(()=>{
            return event.target.value;
        });
        console.log(task);
    }

    let setChange=()=>{
    //    setArr([...arr,{Task:task,id:uuidv4()}]);
          setArr((arr)=>{
            return arr.push({Task:task,id:uuidv4()});
          });
          console.log(arr);
    }


    return (
        <div>
            <h2>ADD TASK</h2>
            <br />
            <input type="text" onChange={trackChange} /> <button onClick={setChange}>ADD</button>
            <ul>
                {arr.map((arr)=>{
                    return (<li key={arr.id}>{arr.Task}</li>);
                })}
            </ul>
        </div>
    );
}

export {Todo};