let btn1=document.querySelector(".btn1");
btn1.onclick=()=>{
    console.log("Button was clicked");
    alert("Button was clicked");
}




let i=24;
btn1.onmouseover=()=>{
    console.log("Pointer Touched");
    console.log(i);
    i++;
}




// Event Object.

btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}


btn1.onclick=(evt)=>{
    evt.clientX=100;
    evt.clientY=100;
}



//Event Listener 

btn1.addEventListener("click",()=>{
    console.log("Button was clicked");
});




//Remove eventListener 
const handler=()=>{
    console.log("This is a Event Listner");
}

btn1.addEventListener("click",handler);
btn1.removeEventListener("click",handler);