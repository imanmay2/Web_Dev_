import {Ticket} from './Ticket.jsx';
import { useState } from 'react';
import { winningCondition } from './helper.js';
function Lottery(){
    let [ticket,setTicket]=useState([0,0,0]);
    return (
        <>
        <h1>Lottery</h1>
        <Ticket ticketArr={ticket} setTicketFn={setTicket}/>
        {winningCondition(ticket,15)==true && <h2>Congratulations,You won the Lottery</h2>}
        </>
    );
}

export {Lottery};