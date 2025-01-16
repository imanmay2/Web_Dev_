const express=require("express");
const app=express();
let port=3030;
const cookieParser=require("cookie-parser");


app.listen(port,()=>{
    console.log("Server is listening to ",port);
});


app.use(cookieParser("secretcode"));
app.get("/getcookies",(req,res)=>{
    res.cookie("Frankfurt","Germany");
    res.cookie("Berlin","Germany");
    res.send("Cookies are send");
});


app.get("/accesscookies",(req,res)=>{
    console.dir(req.cookies);
    res.send("Cookies are fetched.");
})


//Signed Cookie.
app.get("/signedcookies",(req,res)=>{
    res.cookie("made-in","Germany",{signed:true});
    res.send("Signed Cookie process done. ");
})


//verification of the signed cookies.
app.get("/getsignedcookies",(req,res)=>{
    console.log(req.signedCookies);
    res.send("Verification done. ");
});