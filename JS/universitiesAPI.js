let input=document.querySelector("input");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let country=input.value;
    getUniversityName(country);
});


url="http://universities.hipolabs.com/search?name=";
async function getUniversityName(country){
    let ul=document.querySelector("ul");
    url=url+country;
    let res=await axios.get(url);
    arrays=res.data;
    // console.log(arrays);
    for(let arr of arrays){
        let li=document.createElement("li");
        ul.appendChild(li);
        li.innerText="University Name : "+arr.name+" "+arr["state-province"];
        console.log(arr.name);
    }
}