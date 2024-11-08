let input=document.querySelector("input");
let btn=document.querySelector(".add");
let ul=document.querySelector("ul");
btn.addEventListener("click",()=>{
    let task=input.value;
    input.value="";
    input.setAttribute("placeholder","Enter your Task");
    let li=document.createElement("li");
    li.innerHTML=`${task}<Button class="delete">DELETE</Button>`;
    ul.appendChild(li);
});


ul.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        let item=event.target.parentElement;
        item.remove();
    }
});