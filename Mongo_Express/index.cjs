const express = require("express");
const app = express();
const mongoose=require("mongoose");
let port = 8080;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));    //handling post request.
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")))




let Chat=require("./models/chat.cjs");    //imports the model from another file-->chat.cjs




async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}





app.listen(port,()=>{
    console.log("App is listening to : ",port);
    main().then((result)=>{
        console.log("Connection with MongoDB is succesfull ! ");
    }).catch((err)=>{
        console.log(err);
    })
});


app.get("/chats",(req,res)=>{
    Chat.find().then((result_)=>{
        // console.log(result_);
        res.render("home.ejs",{lists:result_});
    })
});




// const user1=new Chat({
//     from:"Shraddha",
//     to:"Shreya",
//     msg:"Hey, I am Shraddha ,How are you?",
//     date: new Date()
// });




// user1.save().then((result_)=>{
//     console.log(result_);
// });