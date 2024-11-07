
// Converting normal function in asnyc one using "Async" keyword.
async function greet(){
    throw "404 Page not found!";
    return "hello";
}

greet()
.then((result)=>{
    console.log("Promise was resolved.");
    console.log("Result was : ",result);
})
.catch((err)=>{
    console.log("Week connection.",err);
});

// Converting Arrow function into a async one.
let greet=async ()=>{
    throw "Week Connection";
    return "hello";
}


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



//Using Await function , in Color Changer.
let h1=document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("Promise Rejected!!!");
            }
            h1.style.color=color;
            resolve("Color changed!!");
        },1000);
    });
}


let changeColor=async ()=>{
    try{
        await colorChange("red",1000);
        await colorChange("green",1000);
        colorChange("blue",1000);
    }catch(err){
        console.log("Error found ",err);
    }
    console.log(5+5);
}


// Fetching API using url.
let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    return res.json();
})

.then((data)=>{
    console.log("data1 : ",data.fact);
    console.log();
    return fetch(url);
})

.then((res)=>{
    return res.json();
})

.then((data)=>{
    console.log("data2 : ",data.fact);
})

.catch((error)=>{
    console.log("Error is : ",error);
})


let url="https://catfact.ninja/fact";
function getFact(){
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log("Data is : ",data.fact);
    })
}

async function getFacts(){
    await getFact();
    await getFact();
    await getFact();
    await getFact();
}

console.log("I am very happy today. !!");

let url="https://catfact.ninja/fact";
//alternative way.
async function getFact(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log("Data is : "+data.fact);

        let res2=await fetch(url);
        let data2=await res2.json();
        console.log("Data is : "+data2.fact);
    }catch(err){
        console.log("Error is : ",err);
    }

}
console.log("I am happy");
getFact();