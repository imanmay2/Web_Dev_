import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo() {

    let [arr, setArr] = useState([{ Task: "Sample-task", id: uuidv4() }, { Task: "Programming", id: uuidv4() }]);
    let [task, setTask] = useState("");

    let trackChange = (event) => {
        setTask(() => {
            return event.target.value;
        });
        console.log(task);
    }

    let setChange = () => {
        // setArr([...arr, { Task: task, id: uuidv4() }]);
        setArr((prev) => {
            return ([...prev, { Task: task, id: uuidv4() }]);
        });
        // console.log(arr);
    }


    let deleteTask=((id_)=>{

        setArr((prev)=>{
            return arr.filter((prev)=>prev.id!=id_);
        });

        // console.log(arr);
    })


    return (
        <div>
            <h2>ADD TASK</h2>
            <br />
            <input type="text" onChange={trackChange} /> <button onClick={setChange}>ADD</button>
            <ul>
                {arr.map((list) => {
                    return (
                            <li key={list.id}>{list.Task}&nbsp;
                            &nbsp; <button onClick={()=>deleteTask(list.id)}>Delete</button></li>
                    );
                })}
            </ul>
        </div>
    );
}

export { Todo };