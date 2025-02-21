import "./Like.css";
import { useState } from "react";
function Like(){
    let [liked,setLiked]=useState(false);
    let [count,setCount]=useState(0);
    let click=()=>{
        liked==false ? setLiked(true) : setLiked(false);
        setCount(count+1);
    }
    return (
        <div onClick={click}>
        {liked==true ? <i className="fa-solid fa-heart red"></i> : <i className="fa-regular fa-heart"></i>}
        <p>Number of clicks : {count}</p>
        </div>
    );
}

export {Like};