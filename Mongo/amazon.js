const mongoose=require("mongoose");

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}



main().then((res)=>{
    console.log("Connection Successful ! ");
}).catch((err)=>{
    console.log(err);
})

//Building the schema, 
const userSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        enum:["fictional","non-fictional"],
    },
    author:{
        type:String,
    },
    pages:{
        type:Number,
        min:[100,"Pages is less than 100"]
    }
});


//building the model.
const Book=mongoose.model("Book",userSchema);

const book1=new Book({
    title:"My love",
    Type:"fictional",
    author:"Anwesha",
    pages:99
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.pages.properties.message);
})