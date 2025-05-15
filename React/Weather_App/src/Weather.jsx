import { useState } from "react";
import {Title} from "./Title"
import "./Weather.css"

function Weather(){
    const key=import.meta.env.VITE_API_KEY;
    const url=import.meta.env.VITE_API_URL;
    let [result,setResult]=useState({
        name:"",
        country:"",
        temperature:"",
        humidity:"",
        windSpeed:"",
        Pressure:""
    });
    let [data,setData]=useState({
        location:""
    });

    let fetchCooridnates=async (city)=>{
        let response=await fetch(`${url}?q=${city}&appid=${key}`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        return jsonResponse;
    }


    let fetchData=async (lat,lon)=>{
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
        let res=await response.json();
        console.log(res);
        // setResult({
        //     name:data.location,
        //     country:res.sys.country,
        //     temperature:
        // });

    }

    let handleSubmit=async (event)=>{
        event.preventDefault();

        
            let dataSet=await fetchCooridnates(data.location);
            console.log(dataSet[0].lat,dataSet[0].lon);
            let lat=dataSet[0].lat;
            let lon=dataSet[0].lon;
            let dataSet2=await fetchData(lat,lon);
            console.log(dataSet2);
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