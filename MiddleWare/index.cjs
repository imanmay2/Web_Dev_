const express=require("express");
const app=express();
const port=8080;
const ExpressError=require("./ExpressError");



// app.use((err,req,res,next)=>{
//     console.log("____________ERROR_________");
//     next(err);
// });

// app.use((req,res)=>{
//     res.send("Invalid Credential Entered.");
// });

//creating Middleware.
// app.use("/",(req,res,next)=>{
//     console.log("Hi, this is the first middleware.");
//     next();
// });


// app.listen(port,(req,res)=>{
//     console.log("App is listening to : ",port);
// });


// //logger info
// // app.use((req,res,next)=>{
// //     req.responseTime=new Date(Date.now().toString());
// //     console.log(req.method,req.path,req.responseTime,req.hostname);
// // });


// app.get("/",(req,res)=>{
//     res.send("This is root");
// });


// app.get("/random",(req,res)=>{
//     res.send("This is the random page");
// });


//Create a authentication middleware concept.
app.listen(port,()=>{
    console.log("App is listening to : ",port);
});


// creating the middle ware.
let checkToken=(req,res,next)=>{
    let {query}=req.query;
    if(query==="giveaccess"){
        next();
    }
    throw new ExpressError("ACESS DENIED");
};


app.get("/err",(req,res)=>{
    abcd=abcd;
});




app.use((err,req,res,next)=>{
    console.log("____________ERROR2_________");
    next();
});





app.get("/api",(req,res)=>{
    res.send("Here is your Data");
});