import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css";

function Todo() {
    let [arr, setArr] = useState([{ Task: "Sample-task", id: uuidv4() ,toggle:"False"}, { Task: "Programming", id: uuidv4(),toggle:"False" }]);
    let [task, setTask] = useState("");
    let [toggle,setToggle]=useState("False");

    let trackChange = (event) => {
        setTask(() => {
            return event.target.value;
        });
        console.log(task);
    }

    let setChange = () => {
        // setArr([...arr, { Task: task, id: uuidv4() }]);
        setArr((prev) => {
            return ([...prev, { Task: task, id: uuidv4() ,toggle:"False"}]);
        });
    }


    let deleteTask = ((id_) => {
        setArr((prev) => {
            return arr.filter((prev) => prev.id != id_);
        });
        // console.log(arr);
    })


    let updateAll = () => {
        let newArr = arr.map((prev) => {
            return {
                ...prev, Task: prev.Task.toUpperCase()
            };
        });
        console.log(newArr);
        setArr(newArr);
    }

    let updateOne = (_id) => {
        let newArr = arr.map((prev) => {
            if (prev.id == _id) {
                return {
                    ...prev, Task: prev.Task.toUpperCase()

                }
            } else {
                return prev;
            }


        });
       
        setArr(newArr);
    }


    let updateDone=(_id)=>{
        console.log(_id);
        let newArr=arr.map((prev)=>{
            if(prev.toggle==="False" && prev.id===_id){
                
                return {
                    ...prev,toggle:"True",
                    
                }
            } else if(prev.id===_id && prev.toggle==="True"){
                
                return {
                    ...prev,toggle:"False",
                }
            } else if(prev.id!=_id){
                return prev
            }
        })
        console.log(newArr);
        setArr(newArr);
    }

    return (
        <div id="border">
            <h2>ADD TASK</h2>
            <br />
            <input type="text" onChange={trackChange} /> <button onClick={setChange}>ADD</button>
            <ul>
                {arr.map((list) => {
                    let styles={textDecoration: list.toggle=="True" ? "line-through" : "none"};
                    return (
                        
                        <li key={list.id}><p style={styles}>{list.Task}</p> &nbsp;
                            &nbsp; <button onClick={() => deleteTask(list.id)}>Delete</button> &nbsp;&nbsp; <button onClick={() => updateOne(list.id)}>UpperCase</button> <button id="DoneBtn" onClick={()=>updateDone(list.id)}>{list.toggle==="True" ? "Mark as Undone" : "Mark as Done"}</button></li>

                    );
                })}
                <br /><br />
                <button onClick={updateAll}>UpperCase All</button>

            </ul>
        </div>
    );
}
export { Todo };