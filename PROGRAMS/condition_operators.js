/*

4 operators are there in javascript .  

"==" / "!="  just to check the inside element , irrespective of the datatype used

"===" / "!==" strictly checks along with the datatype and along it's element inside.

Ternary operator  : 
    Syntax----
            condition ? True : False


*/




//Practise Q.

//Q1. Get user to input  number using prompt . Check if the number is a multiple of 5 or not.
let num=prompt("Enter a number : ");
if(num%5===0){
    console.log(num,"is mulitple of 5");
}
 else{
    console.log(num,"is not a multiple of 5");
 }


//Q2. Write a code which can give grades to students according to their score.
let score= prompt("Enter your score from 0-100");
if(score>=90){
    console.log("Grade : A");
}
else if(score>=80 && score<90){
    console.log("Grade : B");
}
else if(score>=70 && score <80){
    console.log("Grade : C");
}
else if(score>=60 && score<70){
    console.log("Grade : D");
}
else {
    console.log("Grade : E");
}