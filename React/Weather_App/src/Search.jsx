import "./search.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { red } from "@mui/material/colors";
function Search(){
    let flag=true;
    let [obj,setObj]=useState({
        location:""
    });
    let handleChange=(event)=>{
        setObj((prev)=>{
            return {...prev,[event.target.name]:event.target.value}
        });
    }

    let submit=(event)=>{
        event.preventDefault();
        if(!obj.location){
            flag=false;
            return;
        }
        console.log(`Object is : ${obj.location}`);
        setObj({
            location:""
        });
        flag=true;    //resetting the object.
    }
    return(
        <div>
            <form action="">
            <h2 className="title">Search For The Weather</h2>
            <center>
            <TextField label="City_Name" name="location" value={obj.location} variant="outlined" onChange={handleChange} /> <br /> <br />
            <Button variant="contained" onClick={submit}>Submit</Button></center></form>
            {!flag?<p style={{color:red}}>City Name can't be empty</p>:null}
        </div> 
    )
}

export {Search};