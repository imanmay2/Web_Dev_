let btns=document.querySelectorAll("button");
// btns.onclick=function(){
//     console.log("Hello :)");
// };
function hello(){
    console.log("Hello");
};
for(let btn of btns){
    btn.onclick=hello;
    btn.onmouseover=function(){
        console.log("Hello mouse!");
    }
}