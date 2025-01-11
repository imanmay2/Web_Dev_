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


const User=mongoose.model("User",userSchema);
let addUser=async()=>{
    let res=await User.insertMany([
        {username:"imanmay2",email:"imanmay@gmail.com"},
        {username:"ianwesha",email:"ianwesha@gmail.com"}
    ]);
    console.log(res);
}

// addUser();


const Post=mongoose.model("Post",postSchema);
let addPost=async()=>{
    let post1=new Post({
        content:"Hello, I am Anwesha Jana!",
        likes:24,
    });
    let user_=await User.findOne({username:"ianwesha"});
    post1.user=user_;
    console.log(post1);
    let res_=await post1.save();
    console.log(res_);
}

// addPost();

let readPost=async()=>{
    let res_=await Post.find().populate("user","username");
    console.log(res_);
}
// readPost();


let create_=async()=>{
    let user1=new User({
        username:"ihello",
        email:"ihello@gmail.com"
    });

    let post1=new Post({
        content:"hello",
        likes:"65"
    });

    post1.user=user1;
    await user1.save();
    let res=await post1.save();
    console.log(res);
}

// create_();