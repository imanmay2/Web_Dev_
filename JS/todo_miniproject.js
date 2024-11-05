let input_=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
function addTask(){
    task_=input_.value;
    input_.value="";
    input_.setAttribute("placeholder","Enter Task");
    li=document.createElement("li");
    ul.appendChild(li);
    li.append(task_);
}
btn.addEventListener("click",addTask);