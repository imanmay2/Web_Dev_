let n=document.querySelector('button');
n.addEventListener('click','input');
function input(){
    let name=prompt('Enter your name please');
    n.textContent='WELCOME'+name;
}