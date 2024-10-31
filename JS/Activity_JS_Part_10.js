let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3_=document.querySelector("h3");
    let div=document.querySelector("div");
    color=getColor();
    h3_.innerText=color;
    div.style.backgroundColor=color;
});


function getColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let ans=`rgb(${red},${green},${blue})`;
    return ans;
}
