const express=require("express");
const app=express();


const path=require("path");


app.use(express.static(path.join(__dirname,"/public")));




app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));




let port=8080;




app.listen(port,(req,res)=>{
    console.log(`App is listening to port : ${port}`);
});




app.get("/instagram/:username",(req,res)=>{
    let {username}=req.params;
    let instaData=require("./data.json");
    let data=instaData[username]
    if(data){
        res.render("home_insta.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
})




