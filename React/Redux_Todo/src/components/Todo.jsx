import { useSelector,useDispatch } from "react-redux";
import { addTodo,markAsDone,deleteTask } from "../app/features/todo/todoSlice";
import { Form } from "./Form";
function Todo(){
    let todosObj = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    let doneBtn=(id)=>{
        console.log(todosObj.todos);
        dispatch(markAsDone(id));
        let q=document.querySelector(`#${id}`);
        if(q){
            q.style.textDecoration="line-through";
        }
    }


    let deleteBtn=(id)=>{
        console.log(id);
        dispatch(deleteTask(id));
    }


    return(
        <>
        <Form todos={todosObj.todos} dispatch={dispatch} doneBtn={doneBtn} deleteBtn={deleteBtn} addTodo={addTodo} markAsDone={markAsDone} deleteTask={deleteTask}/>
        <h2>Add Your Todo!</h2>
        <ul>
        {todosObj.todos.map((todo)=>
         (<li key={todo.id}>{todo.task} &nbsp;&nbsp;
         <button onClick={()=>doneBtn(todo.id)}>Done</button>
         &nbsp;&nbsp; <button onClick={()=>deleteBtn(todo.id)}>Delete</button>
         </li>)
        )}
        </ul>
        </>
    )
}

export {Todo};