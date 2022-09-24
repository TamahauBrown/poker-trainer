import * as React from "react";

export function PlayerCards() {

    return (
        <div id="playerCards">
            <img src={"./Images/backs/red.svg"} alt="Player card left" className="playerCards"
                 id="leftCard"/>
            <img src={"./Images/backs/red.svg"} alt="Player card right" className="playerCards"
                 id="rightCard"/>
        </div>
    );
}