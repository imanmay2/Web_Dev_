const express=require("express");
const app=express();
const port=3030;
const session=require("express-session");
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
const flash=require("connect-flash");


let sessionObj={
    secret:"mysecret",
    resave:false,
    saveUninitialized:true
}


app.use(session(sessionObj));
app.use(flash());


app.listen(port,()=>{
    console.log("App is listening to ",port);
});


app.get("/get",(req,res)=>{
    res.send("Session ID generated.");
});


app.get("/reqcount",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count=1;
    }
    res.send(`Count is : ${req.session.count}`);
});


//Storing and Using Information/Data.
app.get("/register",(req,res)=>{
    let {name}=req.query;
    if(name){
        req.flash("success","User Registered Successfully.");
    } else{
        req.flash("error","User not registered.");
    }
    req.session.name=name;
    
    res.redirect("/hello");
});


app.get("/hello",(req,res)=>{
    if(req.session.name){
        res.locals.message=req.flash("success");
    } else{
        res.locals.message=req.flash("error");
    }
    // res.send(`Hello ${req.session.name}`);
    res.render("result.ejs",{name:req.session.name});
});

