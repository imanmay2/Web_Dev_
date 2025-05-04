import { useState } from "react";

function Comment(){
    let [idx,setIdx]=useState(-1);
    let [comment,setComment]=useState([{}]);

    let addComment=(obj)=>{
        setIdx(idx+1);
        setComment((currData)=>{
            return [...currData,currData[idx]=obj];
        })
    }
    return (
        <div>
            <h2>Comments</h2>
            {comment.map((commentObj,idx)=>(
                <div className="comment" key={idx}>
                    {commentObj.Username} &nbsp;&nbsp;&nbsp;&nbsp; {commentObj.Rating} <br />
                    {commentObj.Remark}
                </div>
            ))}
        </div>
    )
}

export {Comment};