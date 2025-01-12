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



//Creating mongoose  middleware.
// userSchema.pre("findOneAndDelete",async()=>{
//     console.log("This is a pre middleware.");
// });

userSchema.post("findOneAndDelete",async(user__)=>{
    console.log("This is a post middleware.");
    // console.log(user);
    let res_=await Post.deleteMany({user:user__._id});
    console.log(res_);
});



const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);
let addUser=async()=>{
    let res=await User.insertMany([
        // {username:"imanmay2",email:"imanmay@gmail.com"},
        {username:"ianwesha",email:"ianwesha@gmail.com"}
    ]);
    console.log(res);
}

// addUser();



let addPost=async()=>{
    let post1=new Post({
        content:"Hello, I am Anwesha Jana!",
        likes:24,
    });
    let user_=await User.findOne({username:"ianwesha"});
    post1.user=user_;
    // console.log(post1);
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



//DELETE User ----> Objective so that middleware will delete the Post information as well.

const delUser=async(id_)=>{
    let res=await User.findByIdAndDelete(id_);
    console.log(res);
}

delUser('67835e208a42460bf64162b4');