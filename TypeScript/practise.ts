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
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j]+" ");
        }
        console.log();
    }
}
let arr12:Array<Array<number>>=[];




//dealing with interfaces.

interface customer{
    custName:string,
    age:number
}

interface userType{
    address:"Kaliyaganj"|"Raiganj",
    pin?:733129|733134;
}

let funcSee=(obj:customer&userType):void=>{
    console.log("Name of the customer is : "+obj.custName);
    console.log("Age of the customer : "+obj.age);
    console.log("Address where he lives : "+obj.address);
    if(obj.pin){
        console.log("Pin details : "+obj.pin);
    }else{
        console.log("Pin details not found!!");
    }
}

funcSee({custName:"Anwesha",age:12,address:"Raiganj",pin:733134});


//Classes & Objects in Typescript.
class User{

    private courseCount:number=1;
    email:string | undefined;
    name:string | undefined;
    
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }

    get getUserEmail():string{
        return "Email is : "+this.email;
    }

    get getUserName():string{
        return "Name of the user is : "+this.name;
    }

    set setCourseCount(courseCount:number){
        if(courseCount<=1){
            console.log("Course Count is set to 1");
            return;
        }
        courseCount++;
    }

    get getCourseCount():number{
        return this.courseCount;
    }
}


let manmay=new User("imanmay2@gmail.com","Manmay");
console.log(manmay.getCourseCount);
console.log(manmay.getUserEmail);
console.log(manmay.getUserName);
manmay.setCourseCount;
console.log(manmay.getCourseCount);


//dealing with generics

function printGen<T>(num:T):T{
    // console.log("Number is "+num);
    return num;
}

let arrowGen=<T,U extends number>(val1:T,val2:U):void=>{
    console.log("Values are : "+val1+" "+val2);
}

interface Database{
    connection?:string,
    username:string,
    readonly password:"mysql@123" | "mongodb@123" | "postgreSQL@123"
}


let printObj_=<T,U extends Database>(val1:T,val2:U):object=>{
    return{val1,val2}
}

console.log(printObj_(24,{username:"imanmay2",password:"postgreSQL@123"}));
console.log(typeof("welcome"));


//dealing with Type Narrowing.
let typeNarrow=(val:string | Array<number>)=>{
     if(typeof(val)==="object"){
        for(let i of val){
            console.log("Element is : "+i);
        }console.log();
     } else{
        console.log("String is : "+val);
     }
}

typeNarrow([1,2,3,4]);
console.log();
typeNarrow("Anwesha");

// dealing with the discriminated union.


interface Square{
    kind:"square",
    side:number
}

interface Rectangle{
    kind:"rectangle",
    length:number
    width:number
}

interface Circle{
    kind:"circle"
    radius:number
}

type Shape=Square|Rectangle|Circle;

function getArea(shape:Shape){
    let kind:string=shape.kind;
    switch(kind){
        case "square":
            return shape.side**2;
        
        case "rectangle":
            return (shape.length * shape.width);

        case "circle":
            return (shape.radius**2)*3.14;

        //add the default case.
    }
}

export {};