// Q1. Write a Javascript function that returns elements larger than a number.
let larger=function(arr,num){
    for(let i of arr){
        if(num<i){
            console.log(i);
        }
        console.log();
    }
}