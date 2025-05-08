import { useState } from "react";

function Jokes(){
    const URL="https://official-joke-api.appspot.com/random_joke";
    let [jokes,setJokes]=useState({});

    let getJokes=async ()=>{
        let res=await fetch(URL);
        let response=await res.json();
        // console.log(response);
        setJokes(response);
    }

    return(
        <div>
            <h1>Jokes!</h1>
            <h2>{jokes.setup}</h2>
            <h2>{jokes.punchline}</h2>

            <button onClick={getJokes}>Click</button>

        </div>
    )
}

export {Jokes};