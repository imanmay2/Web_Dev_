//Use of axios instead of fetch.
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let fact=await getFacts();
    fact;
});

let url="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res=await axios.get(url);
        console.log(res.data.fact);
    }catch(err){
        console.log("Error is--",err);
    }
}

getFacts();

