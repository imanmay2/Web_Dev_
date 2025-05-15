import "./Weather.css";

function WeatherData({result,setResult}){
    return(
        <div>
            {result.name != "" ? <h3> <br />{result.name},{result.country} <br />  <br /><img src="./image1.png" height="5vh" width="5vh" />{result.temperature}&#x2103;</h3> : null}


            {result.name && <div className="temp">
                <div className="grey">Humidity <br /> <font className="text">{result.humidity} %</font></div>
                <div className="grey">Wind Speed <br /> <font className="text">{result.windSpeed} m/s</font></div>
                <div className="grey">Pressure <br /> <font className="text">{result.pressure} Pa</font></div>
            </div>}

            {(result.name!="" && result.temperature>30) ? <p className="text">Temperature is high.</p>:<p className="text">Temperature is low.</p>}
        </div>
    )
}


export {WeatherData};