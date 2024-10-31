let btns=document.querySelectorAll("button");
// btns.onclick=function(){
//     console.log("Hello :)");
// };
function hello(){
    console.log("Hello");
};
for(let btn of btns){
    // btn.addEventListener("click",function(){
    //     console.log("Button was clicked! ");
    // });
    btn.addEventListener("mouseenter",function(){
        console.log("Mouse Enter button ignited. ");
    });
}


//use of this function.
