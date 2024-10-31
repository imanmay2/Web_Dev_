// let id_=document.getElementById("my_id");
// console.log(id_.innerHTML);


// //Manipulating Attributes.
// let div_=document.querySelector("div");
// console.log(div_.getAttribute("id"));
// div_.setAttribute("class","my_Class");
// console.log(div_.getAttribute("class"));



// //Changing the style.
// let div_=document.querySelector("div");
// div_.style.backgroundColor="yellow";
// div_.style.fontWeight=1000;



// let ul_=document.querySelectorAll("ul li");   // returns a HTML Collection.
// for(let i=0;i<ul_.length;i++){
//     ul_[i].style.backgroundColor="pink";
// }



// //Using ClassList.
// let div_=document.querySelector("div");
// div_.setAttribute("class","my_Class");
// console.log(div_.classList);
// div_.classList.add("class1");
// div_.classList.add("class2");
// console.log(div_.classList);
// div_.classList.remove("class1");
// console.log(div_.classList);
// console.log(div_.classList.contains("class2"));
// div_.classList.toggle("class2");
// console.log(div_.classList);


let body=document.querySelector("body");
let p_=document.createElement("p");
body.appendChild(p_);
p_.append("Hey I'm red!");
p_.style.color="red";
let h3=document.createElement("h3");
body.appendChild(h3);
h3.append("Hey I'm using blue h3");
h3.style.color="blue";

let div1=document.createElement("div");
div1.style.backgroundColor="pink";
body.appendChild(div1);
let div2=document.createElement("div");
div1.appendChild(div2);
div2.append("I am a div");
let p1=document.createElement("p");
div1.appendChild("p1");
p1.append("Me too!");