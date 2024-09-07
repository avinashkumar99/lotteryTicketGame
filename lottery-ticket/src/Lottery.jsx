import { useState } from "react"
import Ticket from './Ticket';
import WinningCriteria from "./WinningCriteria";
import './Lottery.css';
import Btn from "./Btn";

export default function Lottery () {
    return <>
    <div className="box">
        <h1>Lottery</h1>
        < WinningCriteria />
        <div className="board">
        
        <Ticket />
        <Ticket />
        <Ticket />
        </div>
        <Btn />
    </div>
    </>
};