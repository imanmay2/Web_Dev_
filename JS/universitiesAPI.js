let input=document.querySelector("input");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let country=input.value;
    getUniversityName(country);
});



async function getUniversityName(country){
    url="http://universities.hipolabs.com/search?name=";
    let ul=document.querySelector("ul");
    ul.innerHTML="";
    let u=url+country;
    // console.log(u);
    let res=await axios.get(u);
    let arrays=res.data;
    // console.log(arrays);
    for(let arr of arrays){
        let li=document.createElement("li");
        ul.appendChild(li);
        if(arr["state-province"]!=null){
            li.innerText="University Name : "+arr.name+" "+arr["state-province"];
        }
        else{
            li.innerText="University Name : "+arr.name;
        }
        // li.innerText="University Name : "+arr.name+" "+arr["state-province"];
        // console.log(arr.name);
        
    }
}

