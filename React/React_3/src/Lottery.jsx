import { useState } from "react";

let [s,setSum]=useState(0);

let getLottery=()=>{
    let num=Math.floor(Math.random()*(999-100)+100);
    console.log(num);
    let sum=0;
    while(num!=0){
        let r=num%10;
        sum=sum+r;
        num=Math.floor(num/10);
    }

    setSum(sum);
}
function Lottery(){
    return (
        <div>
            <button onClick={getLottery}>Get New Ticket</button>
            {s===15 ? "<p>Lottery ,Congratualtions You won!</p>" : "<p>Lottery</p>"}
            Lottery Ticket = {s}

        </div>
    );
}


export {Lottery};