// // Write a Javascript for printing all the odd number and even number from 1 to 20.

// console.log("The odd numbers are : ");
// for(let i=1;i<=20;i=i+2){
//     console.log(i);
// }
// console.log();
// console.log();
// console.log("The even numbers are : ");
// for(let i=0;i<=20;i=i+2){
//     console.log(i);
// }

//Write a Javascript code for printing a multiplication table of the inputted number.
let n=prompt("Enter the number : ");
console.log(`Multiplication Table of ${n} is : `);
for(let i=1;i<=10;i++){
    console.log(`${n} * ${i} = ${n*i}`);
}