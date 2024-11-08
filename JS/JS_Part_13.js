//Using axios instead of fetch the API.
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