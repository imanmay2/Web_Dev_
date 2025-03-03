import './Ticket.css';
import {Random} from "./helper.js";
function Ticket({ticketArr,setTicketFn}) {
    let changeTicket=()=>{
        setTicketFn(Random(3));
    }
    return (
        <div className='border'>
        <h2>
        <span>{ticketArr[0]}</span>
        <span>{ticketArr[1]}</span>
        <span>{ticketArr[2]}</span></h2> <br /> <br />
        <button onClick={changeTicket}>Buy Ticket</button>
        </div>
    );
}
export { Ticket };