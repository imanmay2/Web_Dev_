const express=require("express");
const app=express();
const cors=require('cors');


corsOption={
    origin:"http://localhost:5173"
}

app.use(cors(corsOption));

app.listen(8080,(req,res)=>{
    console.log("App is running on port 8080");
});


app.get("/api",(req,res)=>{
    res.json({'msg':'Hello from Express(Backend) .'});
});

