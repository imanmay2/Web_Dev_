import {useState} from "react"

function Form({ todos, dispatch , deleteBtn,doneBtn,addTodo, markAsDone, deleteTask }) {
    let [text, setText] = useState("");
    let handleChange = (event) => {
        setText(() => {
            return [event.target.name] = event.target.value;
        })
    }


    let handleSubmit = (event) => {
        event.preventDefault();
        if (text) {
            console.log("Task is ", text);
            dispatch(addTodo(text));
            setText(() => {
                return [event.target["add_"]] = "";
            });   //Resetting the input field.
        }
    }

    return (
        <>
            <input type="text" placeholder="Enter Task" onChange={handleChange} name="add_" /> &nbsp;&nbsp;
            <button onClick={handleSubmit}>ADD</button>
        </>
    )
}

export { Form };