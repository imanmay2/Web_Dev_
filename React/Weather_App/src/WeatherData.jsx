import "./Weather.css";
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';  //cold
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded'; //heat



function WeatherData({result,err}){
    return(
        <div>

            {(err=="true"? <p style={{color:"red"}}>No such City or Place found!</p>:null)}
            {result.name != "" ? <h3> <br />{result.name},{result.country} {result.temperature>29? <LocalFireDepartmentRoundedIcon/> : <AcUnitRoundedIcon/>}<br />  <br />{result.temperature}&#x2103;</h3> : null}


            {result.name && <div className="temp">
                <div className="grey">Humidity <br /> <font className="text">{result.humidity} %</font></div>
                <div className="grey">Wind Speed <br /> <font className="text">{result.windSpeed} m/s</font></div>
                <div className="grey">Pressure <br /> <font className="text">{result.pressure} Pa</font></div>
            </div>}

            {(result.temperature) ? 
            (result.temperature>30)? <p className="text">Temperature is high.</p>:<p className="text">Temperature is low.</p>:null}
        </div>
    )
}


export {WeatherData};