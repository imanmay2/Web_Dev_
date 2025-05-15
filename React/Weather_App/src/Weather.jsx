import { useState } from "react";
import { Title } from "./Title"
import "./Weather.css"



function Weather() {
    const key = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_API_URL;
    let [result, setResult] = useState({
        name: "",
        country: "",
        temperature: "",
        humidity: "",
        windSpeed: "",
        pressure: ""
    });
    let [data, setData] = useState({
        location: ""
    });

    let fetchCooridnates = async (city) => {
        let response = await fetch(`${url}?q=${city}&appid=${key}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
    }


    let fetchData = async (lat, lon) => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
        let res = await response.json();
        console.log(res);
        setResult({
            name: data.location,
            country: res.sys.country,
            temperature: res.main.temp,
            humidity: res.main.humidity,
            windSpeed: res.wind.speed,
            pressure: res.main.pressure
        });
    }


    let handleSubmit = async (event) => {
        event.preventDefault();
        let dataSet = await fetchCooridnates(data.location);
        console.log(dataSet[0].lat, dataSet[0].lon);
        let lat = dataSet[0].lat;
        let lon = dataSet[0].lon;
        let dataSet2 = await fetchData(lat, lon);
        console.log(dataSet2);
        setData({
            location: ""
        });




    }
    let myLocation=()=>{

    }

    let handleChange = (event) => {
        setData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    }
    return (
        <div className="weather">
            <div><Title title="Weather App" /></div> <br />

            <div className='location'>
                <input className="input_" type="text" placeholder="Enter City" name="location" value={data.location} onChange={handleChange} />
                <button onClick={handleSubmit} style={{ color: "black", backgroundColor: "#5be5f5", marginLeft: "2vh" }}>Search</button> <br />
                <button onClick={myLocation} style={{ color: "black", backgroundColor: "#5be5f5", marginLeft: "2vh" }}>My Location</button>


            </div> <br />
            {result.name != "" ? <h3> <br />{result.name},{result.country} <br />  <br /><img src="./image1.png" height="5vh" width="5vh" />{result.temperature}&#x2103;</h3> : null}


            {result.name && <div className="temp">
                <div className="grey">Humidity <br /> <font className="text">{result.humidity} %</font></div>
                <div className="grey">Wind Speed <br /> <font className="text">{result.windSpeed} m/s</font></div>
                <div className="grey">Pressure <br /> <font className="text">{result.pressure} Pa</font></div>
            </div>}

            {result.name!="" && result.temperature>35 ? <p className="text">Temperature is quite high.</p>:<p className="text">Temperature is low.</p>}
            
        </div>
    )
}

export { Weather }