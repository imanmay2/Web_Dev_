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

// let id=0;

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

//fetching chats from Database.
app.get("/chats",(req,res)=>{
    Chat.find().then((result_)=>{
        // console.log(result_);
        res.render("home.ejs",{lists:result_});
    })
});


//Add Chat --functionality.
app.get("/chats/add",(req,res)=>{
    res.render("add.ejs");
});

app.post("/chats/add/db",(req,res)=>{
    let {from_,to_,msg_}=req.body;
    let info_=new Chat({
        from:from_,
        to:to_,
        msg:msg_,
        date: new Date()
    })
    info_.save();
    res.redirect("/chats");
});



//EDIT---->functionality
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let info=await Chat.findById(id);
    console.log(info);
    res.render("edit.ejs",{id,info});
});


app.post("/chats/:id", async(req,res)=>{
    let {id}=req.params;
    let {msg_}=req.body;
     await Chat.findByIdAndUpdate(id,{msg:msg_},{runValidators:true},{new:true});
    res.redirect("/chats");
});


//DELETE ----> functionality...
app.post("/chats/:id/delete",async (req,res)=>{
    let {id}=req.params;
    await Chat.deleteOne({_id:id},{runValidators:true},{new:true});
    res.redirect("/chats");
});