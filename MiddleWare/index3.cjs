const express=require("express");
const app=express();
const port=8080;
let ExpressError=require("./ExpressError");


// app.listen(port,()=>{
//     console.log("App is listening to ",port);
// });


// app.get("/",(req,res)=>{
//     res.send("Hello, I am root.");
// });


// app.get("/random",(req,res)=>{
//     res.send("Here is your Data ! ");
// });


// app.get("/err",(req,res)=>{
//     abcd=abcd;
// })



// app.use((err,req,res,next)=>{
//     console.log("____ERROR____");
//     next(err);
// });


// // app.use((err,req,res,next)=>{
// //     console.log("____ERROR2____");
// //     next(err);
// // });


// //Middleware.
// app.use("/",(req,res,next)=>{
//     console.log("Hi, I am 1st Middleware.");
//     next();
// });


// app.use("/",(req,res,next)=>{
//     console.log("Hi, I am 2nd Middleware.");
//     next();
// });


// app.use("/random",(req,res,next)=>{
//     let {query}=req.query;
//     if(query==="giveaccess"){
//         next();
//     }
//     throw new ExpressError(404,"ACCESS DENIED");
// });



// // app.use("/random",(err,req,res,next)=>{
// //     let {status,message}=err;
// //     res.status(status).send(message);
// // })


app.listen(port,()=>{
    console.log("App is listen to : ",port);
});


// app.use((req,res,next)=>{
//     let {token}=req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     throw new ExpressError(401,"ACCESS denied");
// });




// app.get("/random",(req,res,next)=>{
//     console.log("HERE IS YOUR DATA");
// });


// app.get("/admin",(req,res)=>{
//     throw new ExpressError(403,"Access to admin is forbidden.");
// });


// app.use((err,req,res,next)=>{
//     let {status,message}=err;
//     res.status(status);
//     res.send(message);
// })



app.use("/random",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED");
});



app.get("/random",(req,res)=>{
    res.send("DATA RETRIEVED...");
});



app.use((err,req,res,next)=>{
    let {status=401,message="ACCESS NOT ALLOWED"}=err;
    res.status(status);
    res.send(message);
});