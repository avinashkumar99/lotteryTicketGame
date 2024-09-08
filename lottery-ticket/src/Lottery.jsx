import { useState } from "react"
import Ticket from './Ticket';
import WinningCriteria from "./WinningCriteria";
import './Lottery.css';
import Btn from "./Btn";

export default function Lottery () {
    const [ticket, setTicket] = useState(Array(3).fill(0));
    console.log(ticket);
    const handleClick = () =>{
        setTicket(()=>{
            return generateNumber(3);
            
        })
    }
    let sum = ticket.reduce((accu, cvlaue) => accu+cvlaue, 0);
    if(sum == 15) {
        console.log("won the game");
    }

    return <>
    <div className="box">
        <div className="win-box">
             < WinningCriteria sum = {sum} />
        </div>
       
        <div className="board">
        <div className="ticket-container">
        <Ticket tnum = {ticket[0]} />
        <Ticket tnum = {ticket[1]} />
        <Ticket tnum = {ticket[2]} />
        </div>
        <br></br>
        <div>
        <Btn generateTicket={handleClick} />
        </div>

        </div>

    </div>
    </>
};


function generateNumber (n) {
    let arr = [];
    for(let i=0; i<n; i++) {
        let num = Math.floor(Math.random()*10);
        // console.log("num", num);
        arr.push(num);
    }
    // console.log("genrateNumber is working");
    return arr;

}