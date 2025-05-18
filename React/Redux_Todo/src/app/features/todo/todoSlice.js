import { createSlice,isDraft,nanoid } from '@reduxjs/toolkit'

const initialState={
    todos:[{id:nanoid(),task:"Programming",isDone:false}]
}

export const todoSlice=createSlice({
    name:"Todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let todo={
                id:nanoid(),
                task:action.payload,
                isDone:false
            }
            state.todos.push(todo);   //direct mutation takes place.
        },

        deleteTask:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                return (todo.id!==action.payload);
            })
        },

        markAsDone:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    return {...todo,isDone:true}
                }
                return todo;
                
            }
        )
        }
    }
})

export const { addTodo,deleteTask,markAsDone } = todoSlice.actions;
export default todoSlice.reducer;