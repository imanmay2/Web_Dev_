let btns=document.querySelectorAll("button");
// btns.onclick=function(){
//     console.log("Hello :)");
// };
function hello(){
    console.log("Hello");
};
for(let btn of btns){
    btn.addEventListener("click",function(){
        console.log("Button was clicked! ");
    });
    btn.addEventListener("dblclick",function(){
        console.log("Button was double clicked! ");
    });
}