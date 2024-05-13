// PRACTISE QUESTIONS.

// 1. Create a H2 heading element with text - "Hello JS".Append "Apna College students" to this text using JS.
// let x=document.querySelector("h2");
// x.innerText=x.innerText+" from Apna College Students"







//2. Create 3 divs with commom class name - "box". Access them and add some unique text to each of them.
// let x=document.querySelectorAll("div");
// x[0].innerText=x[0].innerText+" Hello";
// x[1].innerText=x[1].innerText+" Germany";
// x[2].innerText=x[2].innerText+" Europe";


// //Using For-of loop
// let idx=0;
// for(let i of x){
//     idx++;
//     i.innerText=i.innerText+idx;
// }





// 3. Create a new button element.Give it a text "click me" , background color of red and text color of white.
//          Insert the button as the first element inside the body tag.

let btn=document.createElement("button");
btn.innerHTML="<b>Click me!</b>";
btn.style.backgroundColor="red";
btn.style.color="white";
let x=document.querySelector("body");
x.prepend(btn);