let str1="   msg!  ";
alert(`String after triming and uppercase is  :  ${str1.trim().toUpperCase()}`);

let str2="College";
alert(`String after replacing ${str2.replace('l','t')}`);

let month=["January","July","March","August"];
month[0]="July";
month[1]="June";
console.log(month);


let arr_=['C','C++','HTML','Javascript','Python','Java','C#','SQL']
arr_=arr_.reverse();
console.log(arr_);
console.log(`Index of Javascript is : ${arr_.indexOf('Javascript')}`);


//Assignment.
// Q1. Write a Javascript program, that will print first n elements from the Array.
let arr_=[7,9,0,-2];
n=prompt("Enter the element : ");
console.log(arr_.slice(0,n));


// Q2. Write a Javascript program, that will print the last n elements from the Array.
let arr2=[7,9,0,-2];
n=prompt("Enter the element : ");
console.log(arr2.slice(-1*n));

//Write a Javascript Code, to check whether the string is Blank or not.
let str_=prompt("Enter the String : ");
if(str_==''){
    console.log("String is Empty!!");
}
else{
    console.log(`String is not Empty!! String is ${str_}`)
}



// Input a String and check at a given index, whether the character is  Lowercase or not.
let str_=prompt("Enter the string : ");
let idx=prompt("Enter the index : ");
if(str_==str_[idx].toLowerCase()){
    console.log(`The Character ${str_[idx]} is LowerCase.`);
}
else{
    console.log(`The Character ${str_[idx]} is UpperCase. `);
}


//Write a program that will strip the trailing and leading spaces in the inputted String.
let str_=prompt("Enter the String : ");
console.log(str_.trim());


// Write a program that will check whether the element exists in the Array or not.
let arr_=[1,2,3,4,6,5];
element_=prompt("Enter the element to be serach for : ");
if(arr_.includes(element_)==true){
    console.log(`${element_} is present in the list. `);
}
else{
    console.log(`${element_} is not present in the list. `);
}