import * as React from "react";
import {invoke} from "@tauri-apps/api/tauri";

var equity;
export function ExerciseHeader() {
    var full_path;
    const image_path = "./Images/fronts/";
    const svg = ".svg";

    function hands(res) {
        let entries = Object.entries(res);
        board_cards(entries[0][1]);
        opponent_cards(entries[2][1][0]);
        player_cards(entries[3][1]);
        let equity = entries[1][1];
        return equity;
    }

    /*
        This will break if BE passes more than 2 values
     */
    function player_cards(entries){
        let cards = ["leftCard", "rightCard"];
        let i = 0;
        entries.forEach(function (value) {
            entries = Object.entries(value);
            full_path = image_path + entries[0][1].toString().toLowerCase() + "_" + entries[1][1].toString().toLowerCase() + svg;
            let playerCard = document.getElementById(cards[i]) as HTMLImageElement;
            playerCard.src = full_path;
            i++;
        });
    }

    function board_cards(entries){
        let cards = ["flop1", "flop2", "flop3", "turn", "river"]
            let i = 0;
            entries.forEach(function (value) {
                entries = Object.entries(value);
                full_path = image_path + entries[0][1].toString().toLowerCase() + "_" + entries[1][1].toString().toLowerCase() + svg;
                let boardCard = document.getElementById(cards[i]) as HTMLImageElement;
                boardCard.src = full_path;
                i++;
            });

        }

        function opponent_cards(entries){
        let cards = ["ohl3", "ohr3", "ohl2", "ohr2", "ohl4", "ohr4", "ohl1", "ohr1", "ohl5", "ohr5"];
        let percentages = ["percentage3", "percentage4", "percentage2", "percentage1", "percentage5"];
            for(let i = entries.length; i < cards.length; i++) {
                document.getElementById(cards[i]).style.display = "none";
            }
            let i = 0;
            let j = 0;
            entries.forEach(function(value) {
                //let calculateWidth = 180 - Math.abs(i - cards.length) / ; BACKLOG
                document.getElementById(cards[i]).style.display = "block";

                entries = Object.entries(value);
                full_path = image_path + entries[0][1].toString().toLowerCase() + "_" + entries[1][1].toString().toLowerCase() + svg;
                //document.getElementById(cards[i]).style.width = calculateWidth.toString(); Backlog with the calculateWidth
                let opponentCard = document.getElementById(cards[i]) as HTMLImageElement;
                opponentCard.src = full_path;
                if(i % 2 === 0) {
                    document.getElementById(percentages[j]).style.display = "block";
                    j++;
                }
                i++;
            });

        }


    function equity_estimate() {
        document.getElementById("chances").innerText = "What are your chances of winning?";
        let result = invoke('equity_estimate', {});
        result.then(res => {
            //Where do I store this value now?
            equity = 100 - (parseFloat(hands(res).toString()) * 100);
            return equity;
        });
    }

    return (
        <div className="exercise">
            <div className="exShape" id="ex1" onClick={equity_estimate}> </div>
            <div className="exShape" id="ex2"> </div>
            <div className="exShape" id="ex3"> </div>
            <div className="exShape" id="ex4"> </div>
            <div className="exerciseText" id="ex1text">Equity Estimate</div>
            <div className="exerciseText" id="ex2text">Exercise 2</div>
            <div className="exerciseText" id="ex3text">Exercise 3</div>
            <div className="exerciseText" id="ex4text">Exercise 4</div>
        </div>
    );
}
export {equity}