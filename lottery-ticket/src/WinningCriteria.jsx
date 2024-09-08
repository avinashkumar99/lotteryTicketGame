import './Lottery.css' ;
export default function WinningCriteria ({sum}) {
    return (
        <>
        <div className="win-criteria">
            <h4> Winning Criteria</h4>
            <p><span>Sum</span>&nbsp;should be equal to <span>15</span></p>
            
        </div>
        {
            sum == 15 ? <div><p className="won"><span>Congratulations! </span>You won the game</p></div> : null
        }
        </>
    )
}

