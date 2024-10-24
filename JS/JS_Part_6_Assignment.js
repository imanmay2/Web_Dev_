// Q1. Write a Javascript function that returns elements larger than a number.
let larger=function(arr,num){
    for(let i of arr){
        if(num<i){
            console.log(i);
        }
        console.log();
    }
}


// Q2. Write a program that will extract the unique character from the string inputted from the user.
let unique_=(str)=>{
    let arr=[0];
    for(let i of str){
        if(i in arr==false){
            arr.push(i);
        }
    }
    arr.shift();
    for(let i of arr){
        console.log(i);
    }
}


//Q3. Write a function that will print the largest word from the array.
let findLargest=(arr)=>{
    let arr1=[];
    for(let i of arr.length){
        arr1.push(i.length);
    }

    //finding the maximum one from the arr1 array.
    
}