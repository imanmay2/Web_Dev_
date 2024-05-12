
//Use of loop .
for(let i=1;i<=8;i++){
    console.log("WELCOME TO JAVASCRIPT");
}


//USE OF WHILE LOOP.
let i=1;
while(i<10){
    console.log(i);
    i++;
}



// USE OF DO WHILE LOOP.   The loop will run for 1 time guaranteed.
i=20;
do {
    console.log(i);
    i++;
} while(i<10);  // NOTE : here, at last semicolon is there.





// USE OF FOR-OF loop.
let str="Germany";
for(let i of str){
    console.log(i);
}




//USE OF FOR-IN LOOP.
// used in OBJECTS.
let student = {
    name: "Manmay",
    age:20,
    cgpa:8.8,
    address: "Bangalore"
};
for(let key in student){
    console.log(key,":",student[key]);
}




                                      //  PRACTISE Q.



// Q1. print all the Even and odd number from 1 to n.
let n=prompt("Enter the range : ");
for(let i=1;i<=n;i++){
    if(i%2===0){
        console.log("Even",i);
    }
    else if(i%2!==0){
        console.log("Odd",i);
    }
}




//Q2. Create a random number..and ask the user continuosly to enter that guessing number, until the number get matched.
let rand=prompt("Enter the random number : ");
let num=prompt("Enter the guessing number : ");
while(num!=rand){
    console.log("Sorry!! number doesn't matched.");
    num=prompt("Enter the number again : ");       // prompt returns string type of value.
    if(num==rand){
        console.log("Number matched !!!!");
    }
}