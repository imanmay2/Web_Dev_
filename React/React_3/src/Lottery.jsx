import {Ticket} from './Ticket.jsx';
import { useState } from 'react';

function Lottery(){
    let [ticket,setTicket]=useState([0,0,0]);
    
    return (
        <>
        <h1>Lottery</h1>
        <Ticket ticketArr={ticket} setTicketFn={setTicket}/>
        </>
    );
}

export {Lottery};