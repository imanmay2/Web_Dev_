import "./GameBoard.css";
import { useState } from "react";
function GameBoard() {
    let color={blue:0,red:0,yellow:0,green:0};
    let [count,setCount]=useState(color);

    let updateBlue=()=>{
        setCount((color)=>{
            return ({...color,blue:color.blue+1})
        })
    }

    let updateRed=()=>{
        setCount((color)=>{
            return ({...color,red:color.red+1})
        })
    }

    let updateYellow=()=>{
        setCount((color)=>{
            return ({...color,yellow:color.yellow+1})
        })
    }

    let updateGreen=()=>{
        setCount((color)=>{
            return ({...color,green:color.green+1})
        })
    }
    return (
        <div className="board">
            <div className="blue">
                <div>
                    Count: {count.blue}
                </div>
                <button id="blue" onClick={updateBlue}>Blue</button>
            </div>
            <div className="red">
                <div>
                    Count: {count.red}
                </div>
                <button id="red" onClick={updateRed}>Red</button>
            </div>
            <div className="yellow">
                <div>
                    Count: {count.yellow}
                </div>
                <button id="yellow" onClick={updateYellow}>Yellow</button>
            </div>
            <div className="green">
                <div>
                    Count: {count.green}
                </div>
                <button id="green" onClick={updateGreen}>Green</button>
            </div>
        </div>
    )
}


export {GameBoard};