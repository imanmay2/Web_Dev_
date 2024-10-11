// Write a program that will  input the size of the popcorn and print the price.

let size=prompt("Enter the size of the popcorn : ");
if(size==='XL'){
    console.log("Price is Rs 250. ");
}
else if(size==="L"){
    console.log("Price is Rs 200");
}
else if(size==="M"){
    console.log("Price is Rs 100");
}
else if(size==="S"){
    console.log("Price is Rs 50");
}



// // Write a program to check whether it is a good string or not.
str_=prompt("Enter the string : ");
if((str_[0]=='a' || str_[0]=='A') && str_.length>3){
    console.log(`${str_} is a good string. `);
}
else{
    console.log(`${str_} is not a good string. `);
}



// Create a switch statement for printing the day in the week.
let day = prompt("Enter the day - ")
switch (day) {
    case "1":
        console.log("Sunday");
        break;
    case "2":
        console.log("Sunday");
        break;
    case "3":
        console.log("Sunday");
        break;
    case "4":
        console.log("Sunday");
        break;
    case "5":
        console.log("Sunday");
        break;
    case "6":
        console.log("Sunday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Please enter between 1-7")
}

// Write a program that will print good , if the number is divisible by 10, and bad if not.
let num=prompt("Enter the number : ");
if(num%10==0){
    alert(`${num} is a Good number. `);
}
else{
    alert(`${num} is not Good number. `);
}


// Write a program, that will print the largest of the 2 numbers.
let num1=prompt("Enter the number1 : ");
let num2=prompt("Enter the numebr2 : ");
let num3=prompt("Enter the number3 : ");
console.log(`The Largest number is : ${Math.max(num1,num2,num3)}`);


//Write a program , that will check whether the last digit of the 2 inputted number is same or not.
num1=prompt("Enter the number 1  : ");
num2=prompt("Enter the number 2 : ");
if(num1%10==num2%10){
    alert("Last Digit is Same.");
}
else{
    alert("Last Digit is not Same.");
}