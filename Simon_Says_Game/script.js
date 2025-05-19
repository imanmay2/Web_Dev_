let started=false;
let count=0;


document.addEventListener("keypress",function start(){
    if(started==false){
        console.log("Game started.");
        started=true;
        levelUp();
    }
});


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function remove(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    alert("User must start the game.");
    let h3=document.querySelector("h3");
    count++;
    h3.innerText=`Level ${count}`;
    let btns=document.querySelectorAll("btn");
}