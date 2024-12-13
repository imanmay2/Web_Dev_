const mongoose=require("mongoose");

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}



main()
.then(()=>{
    console.log("Connection is Successful ");
})
.catch((err)=>{
    console.log(err);
})



//defining Schema.
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number
});



//defining model.
const User=mongoose.model("user",userSchema);

const user1=new User({
    name:"Manmay",
    email:"imanmay2@gmail.com",
    age:20
});


user1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err)
})



User.insertMany([
    {name:"Anwesha",email:"anwesha012.jana@gmail.com",age:20},
    {name:"Manmay",email:"imanmay2@gmail.com",age:19}
]);



User.findById("67586cbd8b5382abe0cf591f").then((res)=>{
    console.log(res);
}) .catch((err)=>{
    console.log(err);
})



User.updateMany({age:20},{$set:{age:22}}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})





User.deleteMany({}).then((res)=>{
    console.log(res);
});





// User.find().then((res)=>{
//     console.log(res);
// });