import {useState} from 'react';

function Form(){
    let [obj,setObj]=useState({
        name:"",
        username:""
    });

    let handleForm=(event)=>{
        setObj((currData)=>{
            currData[event.target.name]=event.target.value;
            return currData;
        });
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(obj);
        setObj({
            name:"",
            username:""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder="Enter your name" id="name" name="name" value={obj.name} onChange={handleForm}/> <br/>

            <label htmlFor="username">Username: </label>
            <input type="text" placeholder="Enter your username" id="username" name="username" value={obj.username} onChange={handleForm}/> <br/>
            <button>Submit</button>
            </form>
        </div>
    )
}

export {Form};