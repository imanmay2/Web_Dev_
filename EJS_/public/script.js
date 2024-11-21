let btns=document.querySelector("button");
for(let btn of btns){
    btn.addEventListener("click",()=>{
        console.log("Button was clicked!");
    });
}