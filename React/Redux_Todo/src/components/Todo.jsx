import { useSelector,useDispatch } from "react-redux";
import { addTodo,markAsDone,deleteTask } from "../app/features/todo/todoSlice";
import { Form } from "./Form";
function Todo(){
    let todosObj = useSelector((state) => state.todos);
    // console.log(todosObj.todos);
    const dispatch = useDispatch();
    return(
        <>
        <Form todos={todosObj.todos} dispatch={dispatch}/>
        <h2>Add Your Todo!</h2>

        <ul>
        {todosObj.todos.map((todo)=>
         (<li key={todo.id}>{todo.task} &nbsp;&nbsp;
         <button>Done</button>
         &nbsp;&nbsp; <button>Delete</button>
         </li>)
        )}
        </ul>
        </>
    )
}

export {Todo};