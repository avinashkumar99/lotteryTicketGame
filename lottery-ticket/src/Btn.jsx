import './Btn.css';

export default function Btn ({generateTicket}) {
    return (
        <>
        <button className="button-8" onClick={generateTicket}>Generate Ticket</button>
        </>
    )
}