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
// let arr=[3,3,3,3];
// console.log(arr.some((ele)=>{
//     return ele%2==0;
// }));



//Reduce function.
// let arr=[1,2,3,4];
// let arr_=arr.reduce((res,ele)=>{
//     return res+ele;
// });
// console.log(arr_);



//Use reduce function to find the maximum in the array.
// let arr=[1,2,3,4];
// let max=arr.reduce((res,ele)=>{
//     if(res<ele){
//         return ele;
//     }
// });
// console.log(`Maximum in the array is : ${max}`);



// print the minimum element from the array.
// let arr=[1,2,3,4];
// let min=arr.reduce((res,ele)=>{
//     if(res<ele){
//         return res;
//     }
//     else{
//         return ele;
//     }
// });
// console.log("Minimum element is : "+min);



//Check whether all elements in the array is the multiple of 10 or not.
let arr=[10,20,30,40];
let check=arr.every((ele)=>{
    return ele%10==0;
});
console.log(check);