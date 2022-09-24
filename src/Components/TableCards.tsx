import * as React from "react";

export function TableCards() {

    return (
        <div id="tableCards">
            <img src={"./Images/backs/red.svg"} alt="Flop 1" className="tableCards" id="flop1"/>
            <img src={"./Images/backs/red.svg"} alt="Flop 2" className="tableCards" id="flop2"/>
            <img src={"./Images/backs/red.svg"} alt="Flop 3" className="tableCards" id="flop3"/>
            <img src={"./Images/backs/red.svg"} alt="Turn" className="tableCards" id="turn"/>
            <img src={"./Images/backs/red.svg"} alt="River" className="tableCards" id="river"/>
        </div>
    );
}