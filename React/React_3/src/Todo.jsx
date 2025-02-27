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
    }



    let deleteTask = ((id_) => {
        setArr((prev) => {
            return arr.filter((prev) => prev.id != id_);
        });
        // console.log(arr);
    })

    // let updateAll = () => {
    //     setArr((prev) => {
    //         prev.map((todo) => {
    //             return {
    //                 ...todo, Task: todo.Task.toUpperCase()
    //             };
    //         });
    //     });
    // };

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
         
    }

    return (
        <div>
            <h2>ADD TASK</h2>
            <br />
            <input type="text" onChange={trackChange} /> <button onClick={setChange}>ADD</button>
            <ul>
                {arr.map((list) => {
                    return (
                        <li key={list.id}>{list.Task}&nbsp;
                            &nbsp; <button onClick={() => deleteTask(list.id)}>Delete</button> &nbsp;&nbsp; <button onClick={() => updateOne(list.id)}>UpperCase</button> <button onClick={()=>updateDone(list.id)}>Mark as Done</button></li>

                    );
                })}
                <button onClick={updateAll}>UpperCase All</button>

            </ul>
        </div>
    );
}
export { Todo };