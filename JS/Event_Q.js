// Create a toggle that changes the screen to dark mode when clicked and light-mode when clicked again.

let btn1=document.querySelector(".btn1");
btn1.onclick=()=>{
    if(btn1.innerText==="Dark Mode"){
    btn1.innerText="Light Mode";
    document.body.style.backgroundColor="Black";
    btn1.style.color="white";
    btn1.style.backgroundColor="black";
    }
    else if(btn1.innerText==="Light Mode"){
        btn1.innerText="Dark Mode";
        document.body.style.backgroundColor="white";
        btn1.style.color="black";
        btn1.style.backgroundColor="white";
        }
}