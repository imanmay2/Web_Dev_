// // Write an example of function in JS.

// function display(msg){
//     console.log("Welcome to the world of javascript ",msg);
// }
// msg=prompt("Enter the msg : ")
// display(msg);



// // Create a arrow function of the sum of 2 numbers.
// const sum=(a,b) =>{
//     return a+b;
// }
// console.log("Sum of the 2 numbers are : ",sum(4,4));



// // Create a function which will count the number of vowel from the string.
// function Count_vowel(v){
//     let ct=0;
//     for(let i of v){
//         if(i==='A' || i==='E' || i==='I' || i==='O' || i==='U' || i==='a' || i==='e' || i==='i' || i==='o' || i==='u'){
//             ct+=1;
//         }
//     }
//     return ct;
// }

// let v=prompt("Enter the string : ");
// console.log("Count of the vowel : ", Count_vowel(v));




// // use the above use ARROW FUNCTION.
// const Count_vowel= (v) =>{
//     let ct=0;
//     for(let i of v){
//         if(i==='A' || i==='E' || i==='I' || i==='O' || i==='U' || i==='a' || i==='e' || i==='i' || i==='o' || i==='u'){
//             ct+=1;
//         }
//     }
//     return ct;
// }

// let v=prompt("Enter the string : ");
// console.log("Count of the vowel : ", Count_vowel(v));


// //****// FOR EACH LOOP. : it basically performs the tasks on each elements of the array.
// let arr=[1,2,3,4,5,6];
// arr.forEach(function print_Val(val,inx,arr){
//     console.log(val);
// });
// /// used above one with the help pf arrow function.
// arr.forEach((val,indx,arr)=> {
//     console.log(val);
// });



// // Q. Print the sqaure of each element of the araay using for each.
// let arr=[1,2,3,4];
// console.log("Square of each element of the array is as follows : ");
// arr.forEach((val)=>{
//     console.log(val*val);
// });



// // MAP : It creates a new array with the results of some operations.
// //       the value its callback returns are used to frm new array.
//  let arr=[1,2,3,4];
//  arr.map((val) => {
//     console.log(val); }
//  );

//  // create a arr squaring the elements of prev arr .
//  let a=arr.map((val)=>{
//     return val*val;
//  });
//  console.log(a);


// //FILTER : it filters out the value from the array based on the given condition.
// let arr=[1,2,3,4];
// let c=arr.filter(i=>{
//     return i%2==0;
// });
// console.log(c);


// REDUCE : It helps to return a single value performed on an array.
let arr=[1,2,3,4];
let c=arr.reduce((res,i)=>{
    return res+i;
});
console.log(c);