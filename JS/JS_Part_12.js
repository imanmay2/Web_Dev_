
//Converting normal function in asnyc one using "Async" keyword.
// async function greet(){
//     throw "404 Page not found!";
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("Promise was resolved.");
//     console.log("Result was : ",result);
// })
// .catch((err)=>{
//     console.log("Week connection.",err);
// });

//Converting Arrow function into a async one.
// let greet=async ()=>{
//     throw "Week Connection";
//     return "hello";
// }


// //Using Await keyword.
// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(Math.floor(Math.random()*10)+1);
//             resolve("Resolved");
//         },1000);
//     });
// }



// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }



//Using Await function , in Color Changer.
let h1=document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("Color changed!!");
        },1000);
    });
}

let changeColor=async ()=>{
    await colorChange("red",1000);
    await colorChange("green",1000);
    colorChange("blue",1000);
}