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




type user={
    n:string,
    age:number
}

let funcObj=(userDetails:user):user=>{
    let newObj:user={n:"Anwesha",age:userDetails.age};
    return newObj;
}

let printObj=(userDetails:user):void=>{
    console.log("Name of the person is :  "+userDetails.n);
    console.log("Age is : "+userDetails.age);
}

printObj({n:"Manmay",age:24});
let newObj:user=funcObj({n:"Manmay",age:24});
printObj(newObj);

console.log("restarted");

console.log("restarted...");

console.log();

type student={
    readonly _id:string,
    name:string,
    age:number,
    licence?:boolean
}

let myUser:student={
    _id:"S123",
    name:"Manmay",
    age:24
}

console.log(myUser._id);
console.log(myUser.name);
console.log(myUser.age);
console.log(myUser.licence);


//Arrays

let arr1:Array<number>=[];
for(let i=1;i<=8;i++){
    arr1.push(i);
}


let displayArr=(arr:Array<number>):void=>{
    for(let i of arr){
        console.log(i);
    }
}

console.log("Elements in the array are follows : ");
displayArr(arr1);


//array of objects .
let arrObj:Array<user>=[];

arrObj.push({n:"Anwesha",age:21});

console.log(arrObj[0].n);
console.log(arrObj[0].age);


// 2D array in typescript.
let arr2DFunc=(arr:Array<Array<number>>):void=>{
    for(let i=1;i<=3;i++){
        arr[i]=[];
        for(let j=1;j<=3;j++){
            arr[i].push(j);
        }
    }
}

let funcPrint2D=(arr:Array<Array<number>>):void=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j]+" ");
        }
        console.log();
    }
}
let arr12:Array<Array<number>>=[];

console.log("2D array is as follows : ");
arr2DFunc(arr12);
console.log("wec");
funcPrint2D(arr12);

export {};