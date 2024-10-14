// Write a JS program to find the no of digits in a number.
let n=prompt("Enter the number : ");
console.log("The number of the digit : ",n.toString().length);



// Q2. Write a JS program to find the sum of the digit.
let n=prompt("Enter the number : ");
let s=0;
while(n!=0){
    let r=n%10;
    s=s+r;
    n=n/10;
    n=Math.floor(n);
}
console.log("Sum of the digit : ");
console.log(s);




// Q3. Print Factorial of the number.
let num=prompt("Enter the number : ");
let fact_=1;
for(let i=1;i<=num;i++){
    fact_=fact_*i;
}
console.log("Factorial of ",num,"is ",fact_);




// Q4. Largest Number in the array, with only positive integers.
let arr_=[1,2,3,4,5,-1];
let max_=0;
let f=false;
for(let i=0;i<arr_.length;i++){
    if(arr_[i]<0){
        f=true;
        console.log(`Sorry! Can't execute furthur , Negative number found.${arr_[i]}`);
        break;
    }
    if(arr_[i]>max_){
        max_=arr_[i];
    }
}
if(f==false){
    console.log(`The maximum number is : ${max_}`);
}