import "./Ticket.css";

export default function Ticket({tnum}) {
    return (
        <>
        <div className="ticket-number">
            {tnum}
        </div>
        </>
    )
}