const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
    const result_ = await mongoose.connect('mongodb://127.0.0.1:27017/relations');
    if (result_) {
        console.log("DATABASE CONNECTION SUCCESSFUL.");
    }
}


const userSchema=new Schema({
    username:String,
    email:String
});

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});


let User=mongoose.model("User",userSchema);
let addUser=async()=>{
    let res=await User.insertMany([{
        username:"imanmay2",
        email:"imanmay2@gmail.com"
    },{
        username:"ianwesha",
        email:"anwesha.jana012@gmail.com"
    }]);
    console.log(res);
}

// addUser();
let Post=mongoose.model("Post",postSchema);
let addpost=async()=>{
    let savePost=new Post({
        content:"Hello",
    });
    let user_=await User.findOne({username:"ianwesha"});
    savePost.user.push(user_);
    let res_=await savePost.save();
    console.log(res_);
}

addpost();