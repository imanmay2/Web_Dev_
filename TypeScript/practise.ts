function getSum(num:number):number{
    return num+num;
}

let getSum2=(num:number,num2:number=5):void=>{
    console.log(num*num2);
}

let arr=[1,2,3,4,5,6,7,8];

arr.map((num:number):void=>{
    console.log(num+" ");
})

console.log(getSum(4));
getSum2(4);


type User={
    username:string,
    email:string,
    age:number
}

function createUser(user:User):User{
    return {username:user.username,email:user.email,age:user.age};
}

let usercreated=createUser({username:"imanmay2",email:"imanmay2@gmail.com",age:21});

console.log(usercreated);

export {};