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
    let del=document.createElement("Button");
    li.appendChild(del);
    del.innerText="DELETE";
    del.classList.add("delete");
    del.addEventListener("click",delete_);

}


function delete_(){
    console.log("Deleted"); 
}
btn.addEventListener("click",addTask);