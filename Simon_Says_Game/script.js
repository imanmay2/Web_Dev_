let started = false;
let level = 0;
let game = [];
let userGame = [];
let count = 0;
let end = false;
let color = ["yellow", "red", "green", "purple"];



//querySelectors--->>
let body = document.querySelector("body");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let btns = document.querySelectorAll(".btn");
let timer=document.querySelector(".timer");



//Functions.
function checkGame(game, userGame) {
    if (userGame.length !== game.length) {
        return false;
    } else {
        for (let i = 0; i < game.length; i++) {
            if (game[i] !== userGame[i]) {
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


function userflash(btn) {
    console.log(btn);
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 150);
}


function btnPress() {
    let btn = this;   //returns the btn object.
    userGame.push(btn.getAttribute("id"));
    userflash(btn);

    //check logic.
    if (userGame[count] != game[count]) {
        gameEnd();

        setTimeout(resetGame,5000);

        return;
    } else{
        count++;
        if(userGame.length===game.length && level===count){
            count=0;
            userGame=[];
            levelUp();
        }
    }
}


function gameEnd() {
    body.classList.add("errorFlash");
    setTimeout(function () {
        body.classList.remove("errorFlash");
    }, 200);
    p.innerText = "You score is : " + level;
}

function resetGame() {
    started = false;
    level = 0;
    game=[];
    userGame=[];
    count=0;
    start();
}


function start() {
    p.innerText = "";
    h3.innerText = "Press Any Key to Start the Game.";
    document.addEventListener("keypress", function start() {
        if (started == false) {
            console.log("Game started.");
            started = true;
            for (let btn of btns) {
            btn.addEventListener("click", btnPress);
    }
            levelUp();
        }
    });
}




function levelUp() {
    level++;
    console.log(level);
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);    //generates random number between 0-3.
    let randBtn = color[randIdx];
    console.log(randIdx, randBtn);
    game.push(randBtn);
    let btn = document.querySelector(`.${randBtn}`);
    btnflash(btn);
    
}


start();