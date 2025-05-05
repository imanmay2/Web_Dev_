import { useState } from "react";
import { CommentForm } from "./CommentForm";
import "./Comment.css";
function Comment() {
    let [idx, setIdx] = useState(1);
    let [comment, setComment] = useState([{
        Username:"imanmay2",
        Password:"Manmay@1234",
        Remark:"Good Programmer.",
        Rating:5
    }]);

    let addComment = (obj) => {
        setIdx(idx + 1);
        setComment((currData) => {
            return [...currData, currData[idx] = obj];
        })
    }
    return (
        <div>
            <h2>Comments</h2>
            {comment.map((commentObj, idx) => (
                <div className="comment" key={idx}>
                    {commentObj.Username} &nbsp;&nbsp;&nbsp;&nbsp; {commentObj.Rating} <br />
                    {commentObj.Remark}
                </div>
            ))}
            <hr /> <br /> <br />
            <h2>Form</h2>
            <CommentForm addComment={addComment} />
        </div>


    )
}

export { Comment };