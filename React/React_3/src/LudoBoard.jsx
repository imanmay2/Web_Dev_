import { useState } from "react";

function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,green:0,yellow:0,red:0});
    let updateBlue=()=>{
        setMoves((prev)=>{
            return {...prev,blue:prev.blue+1};
        });
    };
    let updateGreen=()=>{
        setMoves((prev)=>{
            return {...prev,green:prev.green+1};
        });
    };
    let updateYellow=()=>{
        setMoves((prev)=>{
            return {...prev,yellow:prev.yellow+1}
        });
    };
    let updateRed=()=>{
        setMoves((prev)=>{
            return {...prev,red:prev.red+1}
        });
    };
    return(
        <div>
            <p>LudoBoard</p><br />
            <div>Blue Moves : {moves.blue} <br/>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}> Blue +1 </button>
            </div> <br />
            <div>Green Moves : {moves.green} <br />
            <button style={{backgroundColor:"green"}} onClick={updateGreen}> Green +1 </button>
            </div> <br/>
            <div>Yellow moves: {moves.yellow} <br />
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>Yellow +1</button>
            </div>

            <div>Red moves: {moves.red} <br />
            <button style={{backgroundColor:"red"}} onClick={updateRed}>Red +1</button>
            </div>
        </div>
    );
}

export {LudoBoard};