const express=require('express');
const app=express();
const PORT=5000;
app.use(express.json());1

const cors=require('cors');
app.use(cors({
    origin:"http://localhost:5173",
}));

app.get("/api/message",(req,res)=>{
    res.json({message:"Hello from Backend to ReactJS"});
})


app.listen(PORT,(req,res)=>{
    console.log("Server is running on PORT: "+PORT);
})




