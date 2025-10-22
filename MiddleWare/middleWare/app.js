const express = require('express');
const app = express();
const blog=require('./routes/blog');
const port = 3000;

app.use(express.static('public'));
app.use('/blog',blog);

let checkId=(req,res,next)=>{
    let {id}=req.params;
    if(id=='anwesha'){
        console.log("Welcome to Express");
        return next();
    }

    res.send("ACESS DENIED !! ");
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get("/middleman/:id",checkId,(req,res)=>{
    res.send("Welcome to Express . ");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});