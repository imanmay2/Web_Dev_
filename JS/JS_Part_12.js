
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


//Using Await keyword.
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(Math.floor(Math.random()*10)+1);
            resolve("Resolved");
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();

}