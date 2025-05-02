import "./Lottery.css";
import {Title}  from "./Title";
import { useState } from "react";
function Lottery({sum}){

    let rand=()=>{
        return Math.floor(Math.random()*10);
    }
    let [set,setMove]=useState([0,0,0]);
    
    let updateTicket=()=>{
        setMove((set)=>{
            return [rand(),rand(),rand()];
        })
    }

    return (
        <div className="lottery">
             <h2>
            <div id="num">
               
            <Title num={set[0]}/>
            <Title num={set[1]}/>
            <Title num={set[2]}/> </div></h2>
            <button id="btn" onClick={updateTicket}>Buy new Ticket</button>
            {set[0]+set[1]+set[2]==sum ? <p>Congratulations , You Won!</p>: null}
        </div>
    )
}

export {Lottery};