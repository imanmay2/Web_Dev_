let rand_num=Math.floor((Math.random()*100))+1
while(true){
    let num=prompt("Enter the number : ");
    if(num==rand_num){
        alert("You got the correct number.");
        break;
    }
    else if(num<rand_num){
        alert("You entered a number smaller than the guessing number.")
    }
    else if(num>rand_num){
        alert("You entered a number greater than the guessing number.");
    }
}