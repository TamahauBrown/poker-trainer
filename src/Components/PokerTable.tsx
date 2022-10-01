// @ts-ignore
import {ChancesSlider} from "./ChancesSlider.tsx";

import * as React from "react";
// @ts-ignore
import {PlayerCards} from "./PlayerCards.tsx";
// @ts-ignore
import {TableCards} from "./TableCards.tsx";
// @ts-ignore
import {OpponentCards} from "./OpponentCards.tsx";
// @ts-ignore
import {Percentages} from "./Percentages.tsx";

export function PokerTable() {
    return (
        <div id="floor">
            <div id="pokerTable">
                <div id="innerTableBorder">
                <div id="mainTable">
                <TableCards/>
                    <PlayerCards />
                </div>
                <Percentages />
                <OpponentCards/>
            </div>
            </div>
            <ChancesSlider/>
        </div>
    );
}

