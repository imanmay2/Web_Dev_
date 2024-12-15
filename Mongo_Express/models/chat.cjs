const mongoose=require("mongoose");

let chatSchema=mongoose.Schema({
    from:{
        type:String,
        required: true
    },
    to:{
        type:String,
        required: true
    },
    msg:{
        type:String,
        minLength: 1
    },
    date: {
        type:Date,
        required:true
    }
});

const Chat=mongoose.model("Chat",chatSchema);
module.exports=Chat;