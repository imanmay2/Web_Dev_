// Write an example of function in JS.

function display(msg){
    console.log("Welcome to the world of javascript ",msg);
}
msg=prompt("Enter the msg : ")
display(msg);



// Create a arrow function of the sum of 2 numbers.
const sum=(a,b) =>{
    return a+b;
}
console.log("Sum of the 2 numbers are : ",sum(4,4));



// Create a function which will count the number of vowel from the string.
function Count_vowel(v){
    let ct=0;
    for(let i of v){
        if(i==='A' || i==='E' || i==='I' || i==='O' || i==='U' || i==='a' || i==='e' || i==='i' || i==='o' || i==='u'){
            ct+=1;
        }
    }
    return ct;
}

let v=prompt("Enter the string : ");
console.log("Count of the vowel : ", Count_vowel(v));




// use the above use ARROW FUNCTION.
const Count_vowel= (v) =>{
    let ct=0;
    for(let i of v){
        if(i==='A' || i==='E' || i==='I' || i==='O' || i==='U' || i==='a' || i==='e' || i==='i' || i==='o' || i==='u'){
            ct+=1;
        }
    }
    return ct;
}

let v=prompt("Enter the string : ");
console.log("Count of the vowel : ", Count_vowel(v));


//****// FOR EACH LOOP. : it basically performs the tasks on each elements of the array.
let arr=[1,2,3,4,5,6];
arr.forEach(function print_Val(val,inx,arr){
    console.log(val);
});
/// used above one with the help pf arrow function.
arr.forEach((val,indx,arr)=> {
    console.log(val);
});



// Q. Print the sqaure of each element of the araay using for each.
let arr=[1,2,3,4];
console.log("Square of each element of the array is as follows : ");
arr.forEach((val)=>{
    console.log(val*val);
});



// MAP : It creates a new array with the results of some operations.
//       the value its callback returns are used to frm new array.
 let arr=[1,2,3,4];
 arr.map((val) => {
    console.log(val); }
 );

 // create a arr squaring the elements of prev arr .
 let a=arr.map((val)=>{
    return val*val;
 });
 console.log(a);


//FILTER : it filters out the value from the array based on the given condition.
let arr=[1,2,3,4];
let c=arr.filter(i=>{
    return i%2==0;
});
console.log(c);


// REDUCE : It helps to return a single value performed on an array.
let arr=[1,2,3,4];
let c=arr.reduce((res,i)=>{
    return res+i;
});
console.log(c);



// Q. Display average marks from the reduced array itself.
let arr=[92,94,96,98,100];
let Tot_marks=arr.reduce((pre,i)=>{
    return pre+i;
});
console.log("Average marks of the 5 subjects are as follows : ");
console.log(Tot_marks/5);



// Q. We are given an array of marks of n subjects.
// Programmer need to filter out the 90+ marks value and print it.
let marks_arr=[87,93,99,64,86];
let _filter=marks_arr.filter((i)=> {
    return i>90;
});
console.log("Filtered marks are : ",_filter);



// Prompt a number n from the user. Create an array containing number from 1 to n.
// of the elements containing in the array.

let arr=[];
n=prompt("Enter the number : ");
for(let i=1;i<=n;i++){
    arr.push(i);
}
console.log("Array is : ",arr);


// programmer are ordered to use reduce method of array for calculating the sum and product .
let sum=arr.reduce((prev,i)=>{
    return prev+i;
});
console.log("SUM IS : ",sum);

let prod=arr.reduce((pre,k)=>{
    return pre*k;
});
console.log("PRODUCT IS : ",prod);