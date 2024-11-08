// Using axios instead of fetch the API.
let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact=await getFact();
    console.log(fact);
    let body_=document.querySelector("body");
    let p=document.createElement("p");
    body_.append(p);
    p.innerText=fact;
});
async function getFact(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(err){
        // console.log("Error is - ",err);
        return "404-No Fact Found."
        
    }
}


//Using dog's API, fetch the random images of the dog.
let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");
let img=document.querySelector("img");
btn.addEventListener("click",async()=>{
    try{
        let imgSrc=await getImage();
        img.setAttribute("src",imgSrc);
    }catch{
        img.setAttribute("alt",imgSrc);
    }
});
async function getImage(){
    try{
        let res=await axios.get(url);
        return res.data.message;
    }catch(err){
        return "Image Not Found!";
    }
}


let url="https://icanhazdadjoke.com/";
async function getData(){
    let config={headers:{Accept:"application/json"}}
    let res=await axios.get(url,config);
    console.log(res.data.joke);
}
getData();