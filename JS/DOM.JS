
// Accessing HTML CODE from JAVASCIRPT.
console.dir(document.body);
console.dir(document.body.style.background="pink");


//Accessing the Tag name
let x=document.getElementsByTagName("p");
console.dir(x);



//Accessing the id name
let x=document.getElementById("myid");
console.dir(x);


//Accessing the class name
let x=document.getElementsByClassName("class2");
console.log(x);//returns HTML collections.


//Accessing tag 
let x=document.querySelectorAll("p")[1]
console.dir(x);//returns node list


// Accessing Class... using #
let x=document.querySelectorAll("#class2");
console.dir(x);



let x=document.querySelector("p");





let x=document.querySelector("h1");
console.log(x.getAttribute("id"));// Accessing the id value
x.setAttribute("id","Hello Germany!!");
console.log(x.getAttribute("id"));




let x=document.querySelector(".box");
x.style.backgroundColor="pink";
x.innerText="Anwesha";
x.style.fontSize="20";



let x=document.querySelector("div");
let ele=document.createElement("div");//Creating HTML tag
ele.innerHTML="<b>Hello Div</b>";
x.before(ele);
x.remove();







//REFER NOTES FOR FUTHUR DETAILS.