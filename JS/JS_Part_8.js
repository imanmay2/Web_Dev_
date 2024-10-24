// // Trying with arr.forEach function.
// let arr=[1,2,3,4,5,6,7,8];
// print=function(el){
//     console.log(el);
// }



// //creating an array with objects.
// let arr1=[
//     {
//         name:"Anwesha",
//         marks:94.4
//     },{
//         name:"Manmay",
//         marks:98
//     }
// ];


// arr1.forEach(
//     function(student){
//         console.log(`${student.marks}`);
//     }
// )


// //using the map function.
// let num=[1,2,3,4];
// let updated_arr=num.map(function(ele){
//     return ele*2;
// });

// console.log(updated_arr);


// //Filter method..
// let num=[1,2,3,4];
// let even=num.filter((ele)=>{
//     return ele%2==0;
// });

// let odd=num.filter(function(ele){
//     return ele%2!=0;
// });
// console.log(odd);



//Trying Every and Some function.
// let num=[1,2,3,4];
// console.log(num.every((el)=>{
//     return el%2==0;
// }));

// console.log(num.some((el)=>{
//     return el%2==0;
// }));



// //Reduce function----
// let arr=[1,2,3,4,5];
// let reduced_arr=arr.reduce((res,ele)=>{
//     return res+ele;
// });
// console.log(reduced_arr);



// Find Maximum of the array using the Reduce Function of the array.
let arr=[1,2,3,4,5,6,7,8];
let maxi=arr.reduce((res,ele)=>{
    if(res<ele){
        return ele;
    }
});

console.log(maxi);