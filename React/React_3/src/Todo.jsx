import { useState } from "react";

function Todo(){
    let [arr,setArr]=useState([]);

    let [task,setTask]=useState("");

    let changeTodoValue=(event)=>{
        console.log(event.target.value);
    }

    return (
    <div>
        <h1>Add Todo's</h1>
        <input type="text" onChange={changeTodoValue}/>&nbsp;&nbsp; <button>Submit</button>
    </div>
    );
}

export {Todo};