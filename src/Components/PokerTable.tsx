
export function PokerTable() {
    return(
        <div id="pokerTable">
            <div id="playerCards">
                <img src={"./Images/backs/red.svg"} alt="Player card left" className="playerCards"
                     id="leftCard"/>
                <img src={"./Images/backs/red.svg"} alt="Player card right" className="playerCards"
                     id="rightCard"/>
            </div>
            <div id="tableCards">
                <img src={"./Images/backs/red.svg"} alt="Flop 1" className="tableCards" id="flop1"/>
                <img src={"./Images/backs/red.svg"} alt="Flop 2" className="tableCards" id="flop2"/>
                <img src={"./Images/backs/red.svg"} alt="Flop 3" className="tableCards" id="flop3"/>
                <img src={"./Images/backs/red.svg"} alt="Turn" className="tableCards" id="turn"/>
                <img src={"./Images/backs/red.svg"} alt="River" className="tableCards" id="river"/>
            </div>
            <div id="oppCards">
                <img src={"./Images/backs/red.svg"} alt="Hand1Left" className="hand1" id="ohl1"/>
                <img src={"./Images/backs/red.svg"} alt="Hand1Right" className="hand1" id="ohr1"/>
                <img src={"./Images/backs/red.svg"} alt="OpponentHand2Left" className="hand2"
                     id="ohl2"/>
                <img src={"./Images/backs/red.svg"} alt="OpponentHand2Right" className="hand2"
                     id="ohr2"/>
                <img src={"./Images/backs/red.svg"} alt="OpponentHand3Right" className="hand3"
                     id="ohl3"/>
                <img src={"./Images/backs/red.svg"} alt="OpponentHand4Left" className="hand4"
                     id="ohr3"/>
                <img src={"./Images/backs/red.svg"} alt="OpponentHand3Right" className="hand4"
                     id="ohl4"/>
                <img src={"./Images/backs/red.svg"} alt="OpponentHand5Left" className="hand5"
                     id="ohr4"/>
                <img src={"./Images/backs/red.svg"} alt="OpponentHand3Right" className="hand4"
                     id="ohl5"/>
                <img src={"./Images/backs/red.svg"} alt="OpponentHand5Left" className="hand5"
                     id="ohr5"/>
            </div>
        </div>
    );
}