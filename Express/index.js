const express=require("express");
let app=express();

let port=8080;

//Listening to request 
app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});


//Sending Response.
// app.use((req,res)=>{
//     // console.log(res);
//     let code="<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li><li>Orange</li>";
//     res.send(code);
// });

app.get("/",(req,res)=>{
    res.send("Hello,You contacted root path !");
});

app.get("/apple",(req,res)=>{
    res.send("You contacted apple path ! ");
});

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("Nothing Searched");
    }
    else{
        res.send("You searched "+q);
    }
});

// app.get("/:username/:id",(req,res)=>{
//     let {username}=req.params;
//     res.send(`<h1>Hey You connected with ${username}</h1>`);
// })



app.get("*",(req,res)=>{
    res.send("Path doesn't exist.");
});