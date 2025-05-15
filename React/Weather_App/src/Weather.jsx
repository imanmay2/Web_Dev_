import { useState } from "react";
import { Title } from "./Title"
import "./Weather.css"
import { WeatherData } from "./WeatherData";
import TextField from '@mui/material/TextField';

function Weather() {
    const key = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_API_URL;
    let [err, setErr] = useState("false");
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
        try {
            let response = await fetch(`${url}?q=${city}&appid=${key}`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setErr("false");
            return jsonResponse;
        } catch (err) {
            setErr("true");
        }
    }


    let fetchData = async (lat, lon) => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
            let res = await response.json();
            console.log(res);
            setErr("false");
            setResult({
                name: data.location,
                country: res.sys.country,
                temperature: res.main.temp,
                humidity: res.main.humidity,
                windSpeed: res.wind.speed,
                pressure: res.main.pressure
            });
        } catch {
            setErr("true");
        }

    }


    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let dataSet = await fetchCooridnates(data.location);
            console.log(dataSet[0].lat, dataSet[0].lon);
            let lat = dataSet[0].lat;
            let lon = dataSet[0].lon;
            let dataSet2 = await fetchData(lat, lon);
            console.log(dataSet2);
            setErr("false");
            setData({
                location: ""
            });
        } catch (err) {
            setErr("true");
        }
    }
    let myLocation = () => {

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
                <TextField label="City" variant="outlined" className="input_" type="text" name="location" value={data.location} onChange={handleChange} />
                {/* <input className="input_" type="text" placeholder="Enter City" name="location" value={data.location} onChange={handleChange} /> */}
                <button onClick={handleSubmit} style={{ color: "black", backgroundColor: "#5be5f5", marginLeft: "2vh" }}>Search</button> <br />
                <button onClick={myLocation} style={{ color: "black", backgroundColor: "#5be5f5", marginLeft: "2vh" }}>My Location</button>


            </div> <br />



            <WeatherData result={result} err={err} />
        </div>
    )
}

export { Weather }