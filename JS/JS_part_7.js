// //Use of this keyword.

// const student={
//     name:"Anwesha",
//     eng:94,
//     math:90,
//     phy:90,
//     getAvg(){
//         console.log(`${this.name} has got an average marks of ${(this.eng+this.math+this.phy)/3}`);
//     }
// }


// // Use of try-catch keyword.
// try{
//     console.log(a);
// } catch(err){
//     console.log(err);
// }
// console.log("Hello!");


// //Arrow Functions.
// const sum=(a,b)=>{
//     console.log(a+b);
// };
// sum(4,4);

// //Implicit Function.
// const multiply=(a,b)=>(
//     a*b
// );

// console.log(multiply(4,4));


// //setTimeout function.
// console.log("hello");
// setTimeout(()=>{
//     console.log("To Apna College! ");
// },2000);
// console.log("Welcome ");


// //setInterval.
// let id1=setInterval(()=>{
//     console.log("Hi!!!!");
// },2000);


// let id2=setInterval(()=>{
//     console.log("Hello!!!!");
// },2000);

// clearInterval(id1);


//Checking "this keyword with the lexical and function scope."
let student={
    name:"Manmay",
    getMarks:function(){
        console.log(this); //returns student object.
    },
    getName:()=>{
        console.log();  //returns window object.
    }
};