let btns=document.querySelectorAll("button");
btns.onclick=function(){
    console.log("Hello :)");
};
function hello(){
    console.log("Hello");
};
for(let btn of btns){
    btn.addEventListener("click",function(){
        console.log("Button was clicked! ");
    });
    btn.addEventListener("mouseenter",function(){
        console.log("Mouse Enter button ignited. ");
    });
}


//use of this function.
btns=document.querySelectorAll("button");
for(let btn of btns){
    btn.addEventListener("click",function(){
        this.style.backgroundColor="blue";
    });
}


//keyboard events.
let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    if(event.key=="ArrowUp"){
        console.log("Arrow Up key is pressed!");
    }
    else if(event.key=="ArrowDown"){
        console.log("Arrow Down key is pressed!");
    }
    else if(event.key=="ArrowLeft"){
        console.log("Arrow Left key is pressed");
    }
    else if(event.key=="ArrowRight"){
        console.log("Arrow Right key is pressed");
    }
});


// Form events.
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();   // stays in the same page.
    console.dir(this);
    let user=this.elements[0];
    let pass=this.elements[1];
    console.log(`${user.value} is the username ${pass.value} is the password.`);
    console.log("Form Submitted");
});


//More Events : -- Change and Input Events.
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    console.log("Form Submitted");
});

let user=document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("Change");
    console.log(user.value);
});

let user_=document.querySelector("#user");
user_.addEventListener("input",function(){
    console.log("Input");
    console.log(user_.value);
});


//Event Bubbling.
