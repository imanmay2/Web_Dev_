import { useState,useEffect } from "react";

function Counter(){

    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);
    let handleCountx=()=>{
        setCountx((countx)=>{
            return countx+1;
        })
    }

    let handleCounty=()=>{
        setCounty((county)=>{
            return county+1;
        })
    }

    useEffect(function sideEffectx(){
        console.log("Hello sideEffect");
    },[countx,county]);

    return(
        <div>
        <h2>Count is : {countx}</h2>
        <button onClick={handleCountx}>Submit</button>

        <h2>Count is : {county}</h2>
        <button onClick={handleCounty}>Submit</button>
        </div>
    )
}

export {Counter};