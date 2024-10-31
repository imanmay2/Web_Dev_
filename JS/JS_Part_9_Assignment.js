// Q1. Create a new input and button tag , in the button, Click Me! must be written.
let inp=document.createElement("input");
let btn=document.createElement("button");
let body=document.querySelector("body");
body.appendChild(inp);
body.appendChild(btn);
btn.innerText="Click Me!";

// Q2. Change the placeholder value to "Username", and change the id of the button to "btn".
let inp=document.createElement("input");
let btn=document.createElement("button");
let body=document.querySelector("body");
body.appendChild(inp);
body.appendChild(btn);
inp.setAttribute("placeholder","username");
btn.setAttribute("id","btn");
btn.innerText="Click Me!";


//Q3. Create an h1 element on the page and set its text to “DOM Practice” underlined.Change its color to purple.
let h1=document.createElement("h1");
let body=document.querySelector("body");
body.append(h1);
h1.innerText="DOM Practise";
h1.style.textDecoration="underline";
let p_=document.createElement("p");
body.appendChild(p_);
p_.innerHTML="Aplha Batch <B>Delta</B> Practise";
