let started = false;
let level = 0;
let game = [];
let userGame = [];
let count = 0;
let color = ["yellow", "red", "green", "purple"];

function start(){
    document.addEventListener("keypress", function start() {
    if (started == false) {
        console.log("Game started.");
        started = true;
        levelUp();
    }
});
}



let end=false;

function checkGame(game, userGame) {
    if(userGame.length!==game.length){
        return false;
    } else{
        for(let i=0;i<game.length;i++){
            if(game[0]!==userGame[0]){
                return false;
            }
        }
    }
    return true;
}




function btnflash(btn) {
    console.log(btn);
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}


function btnPress() {
    let btn = this;   //returns the btn object.
    // console.log(btn);
    userGame.push(btn.getAttribute("id"));
    btnflash(btn);
    if(userGame[count]!=game[count]){
        end=true;
        return;
    }
}


function gameEnd(){
    let body=document.querySelector("body");
    body.classList.add("errorFlash");
    setTimeout(function(){
        body.classList.remove("errorFlash");
    },200);


    let p=document.querySelector("p");
    p.innerText="You have scored : "+level-1;
}


function levelUp() {
    let h3 = document.querySelector("h3");
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randBtn = color[randIdx];
    console.log(randIdx, randBtn);
    game.push(randBtn);
    let btn = document.querySelector(`.${randBtn}`);
    btnflash(btn);



    let btns = document.querySelectorAll(".btn");
    for (let btn of btns) {
        btn.addEventListener("click", btnPress);
    }

    if(checkGame(game,userGame) && level===count && end===false){
        count=0;
        userGame=[];
        levelUp();
    } else if(end===true){
        gameEnd();
        started=false;
        count=0;
        level=0;
    }
}


start();