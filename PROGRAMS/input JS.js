// let n=document.querySelector('button');
// n.addEventListener('click','input');
let but=document.getElementById("but");

function input(){
    let name=prompt('Enter your name please');
    but.innerHTML='WELCOME '+name;
}