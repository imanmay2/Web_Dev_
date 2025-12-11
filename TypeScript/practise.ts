let n:string="anwesha";
console.log(n);

let num:number=20.4567;
console.log(parseFloat(num.toFixed(2)));

//functions in typescript. 
function printData(name:string):string{
    return ("Welcome to Typescript "+name);
}

//arrow functions.
let arrowFunc=(name:string):string=>{
    return ("Welcome to Typescript , You can do it alone "+name);
}

let str:string=printData("Manmay");
console.log(str);

console.log(arrowFunc("Lopa"));

//Arrays
let arr:string[]=["Anwesha","Shaktimaan","Manmay","Welcome"];
arr.map((ele:string):void=>{
    console.log("Name is : "+ ele);
});

//handling the error using never 
let handleError=(errMsg:string):void=>{
    try{
        throw new Error(errMsg);
    } catch(errMsg){
        console.log(errMsg);
    }
    
}

// handleError("Intensional Crash for trial period.");

export {};