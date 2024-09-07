import "./Ticket.css";

export default function Ticket({value = 5}) {
    return (
        <>
        <div className="ticket-number">
            {value}
        </div>
        </>
    )
}