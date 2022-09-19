import * as React from "react";
import {invoke} from "@tauri-apps/api/tauri";

// @ts-ignore
import {EquityResponse} from "../PokerModels/BEVars";

let equity;

export function ExerciseHeader() {
    let full_path;
    const image_path = "./Images/fronts/";
    const svg = ".svg";

    function equity_estimate() {
        document.getElementById("chances").innerText = "What are your chances of winning?";
        let result = invoke('equity_estimate', {});
        result.then(res => {
            let cards: EquityResponse = {
                board: (res as any).board,
                opponent_hands: (res as any).opponent_hands,
                equity: (res as any).equity * 100,
                player_hand: (res as any).player_hand,
            };
            display_hands(cards);
            equity = cards.equity;
        });
    }

    function display_hands(cards) {
        player_cards(cards.player_hand);
        board_cards(cards.board);
        opponent_cards(cards.opponent_hands);
    }

    /*
        This will break if BE passes more than 2 values
     */
    function player_cards(entries) {
        let cards = ["leftCard", "rightCard"];
        let i = 0;
        entries.forEach(function (card) {
            full_path = image_path + card.suit + "_" + card.value + svg;
            let playerCard = document.getElementById(cards[i]) as HTMLImageElement;
            playerCard.src = full_path;
            i++;
        });
    }

    function board_cards(entries) {
        let cards = ["flop1", "flop2", "flop3", "turn", "river"]
        let i = 0;
        entries.forEach(function (card) {
            full_path = image_path + card.suit + "_" + card.value + svg;
            let boardCard = document.getElementById(cards[i]) as HTMLImageElement;
            boardCard.src = full_path;
            i++;
        });

    }

    function opponent_cards(entries) {
        let cards = ["ohl3", "ohr3", "ohl2", "ohr2", "ohl4", "ohr4", "ohl1", "ohr1", "ohl5", "ohr5"];
        //let percentages = ["percentage3", "percentage4", "percentage2", "percentage1", "percentage5"];
        for (let i = entries.length; i < cards.length; i++) {
            document.getElementById(cards[i]).style.display = "none";
        }
        let i = 0;
        // let j = 0;
        entries.forEach(function (hand) {
                hand.forEach(function (card) {
                    //let calculateWidth = 180 - Math.abs(i - cards.length) / ; BACKLOG
                    document.getElementById(cards[i]).style.display = "block";
                    full_path = image_path + card.suit + "_" + card.value + svg;
                    //document.getElementById(cards[i]).style.width = calculateWidth.toString(); Backlog with the calculateWidth
                    let opponentCard = document.getElementById(cards[i]) as HTMLImageElement;
                    opponentCard.src = full_path;
                    //if(i % 2 === 0) {
                    //document.getElementById(percentages[j]).style.display = "block";
                    //j++;
                    //}
                    i++;
                });
            }
        )
        ;

    }

    return (
        <div className="exercise">
            <img src={"../Exercises/equity-estimate.png"} className="exShape" id="ex1" onClick={equity_estimate} />
            <div className="exShape" id="ex2"> </div>
            <div className="exShape" id="ex3"> </div>
            <div className="exShape" id="ex4"> </div>
            <div className="exerciseText" id="ex1text">Chances of winning</div>
            <div className="exerciseText" id="ex2text">Exercise 2</div>
            <div className="exerciseText" id="ex3text">Exercise 3</div>
            <div className="exerciseText" id="ex4text">Exercise 4</div>
        </div>
    );
}

export {equity}