import { useState } from "react";

function Lottery() {
    let [s, setSum] = useState(0);
    let getLottery = () => {
        let num = Math.floor(Math.random() * (999 - 100) + 100);
        console.log(num);
        let sum = 0;
        while (num != 0) {
            let r = num % 10;
            sum = sum + r;
            num = Math.floor(num / 10);
        }

        setSum(sum);
    }



    return (
        <div>
            {s === 15 ? <h2>Lottery ,Congratualtions You won!</h2> : <h2>Lottery</h2>}
            Lottery Ticket = {s} <br />
            <br />
            <button onClick={getLottery}>Get New Ticket</button>
            

        </div>
    );
}


export { Lottery };