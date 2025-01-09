
const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
    const result_ = await mongoose.connect('mongodb://127.0.0.1:27017/relations');
    if (result_) {
        console.log("DATABASE CONNECTION SUCCESSFUL.");
    }
}

const orderSchema = new Schema({
    item: String,
    price: Number
});

const custSchema=new Schema({
    name:String,
    orders:[{
        type:Schema.Types.ObjectId,
        ref:"Order"
    }]
});


const Order = mongoose.model("Order", orderSchema);
let addOrders = async () => {
    let res_=await Order.insertMany([{
        item: "Chips",
        price: 10
    },
    {
        item: "Samosa",
        price: 12
    }, {
        item: "Chocolate",
        price: 50
    }]);
    console.log(res_);
}

const Customer=mongoose.model("Customer",custSchema);
let addCustomers=async()=>{
    let cust_1=new Customer({
        name:"Rahul"
    });
    let order1=await Order.findOne({item:"Chips"});
    let order2=await Order.findOne({items:"Chocolate"});
    console.log(order2);
    // cust_1.orders.push(order1);
    // cust_1.orders.push(order2);
    // let res__=await cust_1.save();
    // console.log(res__);
}

// addCustomers();

// addOrders();


let customers=async()=>{
    let res=await Customer.findOne({name:"Rahul"}).populate("orders");
    console.log(res);
};
addCustomers();
customers();
