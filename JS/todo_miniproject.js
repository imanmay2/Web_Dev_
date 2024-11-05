let input_=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
function addTask(){
    task_=input_.value;
    input_.value="";
    input_.setAttribute("placeholder","Enter Task");
    li=document.createElement("li");
    ul.appendChild(li);
    // li.append(task_);
    li.innerHTML=task_+"<Button>DELETE</Button>";
    ul.addEventListener("click",function(event){
        event.stopPropagation();
        if(event.target.nodeName=="BUTTON"){
            let listItem=this.parentElement;
            listItem.remove();
        }
    });


}
btn.addEventListener("click",addTask);