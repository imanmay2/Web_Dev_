import { useState } from "react";
function CommentForm({addComment}){
    // let [idx,setIdx]=useState(0);
    let [obj,setObj]=useState({
        Username:"",
        Password:"",
        Remark:"",
        Rating:""
    });


    let handleInput=(event)=>{
        setObj((currObj)=>{
            
            return {...currObj,[event.target.name]:event.target.value};
        })
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        
        addComment(obj);
        console.log(obj);
        
        
    }

    return (
        <div>
            <form>

            <label htmlFor="username">Username: </label>
            <input type="text" name="Username" placeholder="Enter your username" id="username" onChange={handleInput} required/> <br /> <br />

            <label htmlFor="password">Password: </label>
            <input type="password" name="Password" placeholder="Enter your password" id="password" onChange={handleInput} required/> <br /> <br />

            <label htmlFor="remarks">Remarks: </label>
            <textarea name="Remark" id="remarks" placeholder="Your Remarks" onChange={handleInput} required></textarea> <br /> <br />

            <label htmlFor="rating">Rating: </label>
            <input type="number" name="Rating" id="rating" min="1" max="5" onChange={handleInput} required/> <br /> <br />
            <button onClick={handleSubmit}>Submit</button> 
            </form>
        </div>
    )
}

export {CommentForm};