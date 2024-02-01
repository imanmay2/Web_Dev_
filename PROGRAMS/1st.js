//1..... Create a const object called "product" to store the information shown in this pic.
// and do some operations.
const product= {
    pro_type: "Pen",
    rating: 4,
    isDeal: false,
    price: 512, 
};


// let and const are the two variable declaration method.
//     1. let can be used to declare only once, later we can change the value of that particular variable.
//     2. const can also be used to declare a variable only once, but here , we can't change/ update the value, once it is already declared.


console.log(product);   // exisitng entered by the user.
product.rating=5;
product["isDeal"]=true;
product["price"]=480;
product.pro_type="PEN";
console.log(product); // Changed everything.......




//2. ....Create a const variable where it wil store a person's insta id information.
//   and do some operations on it.

const insta={
    id_name: "imanmay2",
    followers: 47,
    following: 51,
    descrip:"i am learning Javascript"
};

console.log(insta);  // User entry is shown here.
insta.id_name="manmaychakraborty";
insta["followers"]=10;
insta["following"]=20;
insta.descrip="Ziel ist meine Deutschland , Deutschland ist meine Ziel";
console.log(insta); // Info changed ......