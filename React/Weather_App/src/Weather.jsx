import { useState } from "react";
import {Title} from "./Title"
import "./Weather.css"

function Weather(){
    let [data,setData]=useState({
        location:""
    });
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data.location);
        setData({
            location:""
        });
    }

    let handleChange=(event)=>{
        setData((currData)=>{
            return {...currData,[event.target.name]:event.target.value}
        })
    }
    return (
        <div className="weather">
            <Title title="Weather App" />
            <div className='location'>
                <input className="input_"  type="text" placeholder="Enter City" name="location" value={data.location} onChange={handleChange}/>
                <button onClick={handleSubmit} style={{color:"black",backgroundColor:"#5be5f5",marginLeft:"2vh"}}>Search</button>
                <div className="Data">

                </div>
            </div>
        </div>
    )
}

export {Weather}