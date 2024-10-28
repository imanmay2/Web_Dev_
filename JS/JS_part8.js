// Using Arr.forEach function

// let arr=[1,2,3,4];
// arr.forEach((ele)=>{
//     console.log(ele);
// }
// );


// Using Map function.

// let arr=[1,2,3,4];
// let arr_=arr.map(function(ele){
//     return ele*2;
// }
// );

//Using Filter function.

// let arr=[1,2,3,4];
// let arr_even=arr.filter((ele)=>{
//     return ele%2==0;
// });


// let arr_odd=arr.filter((ele)=>{
//     return ele%2!=0;
// });
// console.log(`Even Elements in the array is : ${arr_even}`);
// console.log(`Odd Elements in the array is : ${arr_odd}`);


//Using Every Function.
let arr=[3,3,3,3];
console.log(arr.some((ele)=>{
    return ele%2==0;
}));