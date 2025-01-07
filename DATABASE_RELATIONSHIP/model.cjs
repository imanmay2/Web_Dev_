const mongoose = require('mongoose');

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relations').then(()=>{
        console.log("Connection Successful.");
    });
}


// const userSchema=new mongoose.Schema({
//     name:String,
//     address:[
//         {
//             _id:false,
//             location:String,
//             city:String
//         }
//     ]
// });


// const User=mongoose.model("User",userSchema);

// const addUser=async()=>{
//     let user1=new User({
//         name:"Manmay",
//         address:[
//             {
//                 location:"Manibag",
//                 city:"Kaliyaganj"
//             }
//         ]
//     })
//     user1.address.push({
//         location:"P32",city:"London"
//     });

//     await user1.save().then((res)=>{
//         console.log(res);
//     });
// }

// addUser();

const orderSchema=new mongoose.Schema({
    item:String,
    price:Number
});


const Order=mongoose.model("Order",orderSchema);
let addOrders=async()=>{
    await Order.insertMany([
        {item:"Samosa",price:12},
        {item:"Chips",price:10}
    ]).then((res)=>{
        console.log(res);
    });
};


addOrders();