import { useState } from "react";

function Counter(){
    let [count,setCount]=useState(0);
    let incCount=()=>{
        setCount((count)=>{
            return count+1;
        });

        setCount((count)=>{
            return count+1;
        })
    }
    return (
        <div>
            <h2>Count is: {count}</h2>
            <button onClick={incCount}>Click Here</button>
        </div>
    )
}


export {Counter};