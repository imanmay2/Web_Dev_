let input=document.querySelector("input");
country=input.value;
console.log(country);
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    country=input.value;
    console.log(country);
});