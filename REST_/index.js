const express=require("express");
const app=express();

let methodOverride = require('method-override')

 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))


let r=3;
const path=require("path");



app.use(express.static(path.join(__dirname,"/public")));



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));




app.use(express.urlencoded({extended:true}));




let port=8080;




let posts=[
    {
        id: "1",
        username:"imanmay2",
        content:"Hello , I am Manmay, I will go Germany by 2028."
    },
    {
        id:"2",
        username:"ianwesha",
        content:"Hello , all , I am Anwesha Chakraborty ! "
    },
    {
        id:"3",
        username:"lopa",
        content:"Hey, I am lopa"
    }
];




app.listen(port,(req,res)=>{
    console.log("App is running on port : "+port);
});



app.get("/posts/new",(req,res)=>{
   res.render("add.ejs"); 
});


app.get("/posts/:id/Edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});




app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>p.id===id);
    const newContent=req.body.content;
    post.content=newContent;
    res.redirect("/posts");
});



app.delete("/posts/:id",(req,res)=>{
    r=r-1;
    let {id}=req.params;
    posts=posts.filter((p)=>p.id!==id);
    res.redirect("/posts");

});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("details.ejs",{post});
});





app.post("/posts",(req,res)=>{
    r=r+1;
    let id=r.toString();
    let {username,content}=req.body;
    posts.push({id,username,content});
    res.redirect("/posts");
});



app.get("/posts",(req,res)=>{
    res.render("quora.ejs",{posts});
});