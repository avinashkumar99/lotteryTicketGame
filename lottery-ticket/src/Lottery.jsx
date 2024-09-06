import { useState } from "react"



export default function Lottery () {
    const [lotteryTicket, setLotteryTicket] = useState(0);
    const [sum, setSum] = useState(0);
    const handleGenerateTicket = ()=> {
        console.log("generating...");
        let ticket = Math.floor(Math.random()*900) + 100;
 
        console.log(ticket);
        let newTicket = lotteryTicket;
        let tempSum = 0;
        while(newTicket>0) {
    
            let lastDigit = newTicket % 10;
            tempSum += lastDigit;
            newTicket = Math.floor(newTicket/10);
        }
        setSum(tempSum);
        setLotteryTicket(ticket);
        
    }
    console.log(`Sum is ${sum}`);

    // sum = 15;


    return <>
    <div>
        <h1>Lottery</h1>
        <h4>Lottery ticket : { lotteryTicket }</h4>
        {sum === 15 ? <p>You won the game!</p> : <p>Try again!</p>}
        <p>Sum : { sum }</p>
        <button onClick={handleGenerateTicket}>Generate Ticket</button>
    </div>
    </>
};