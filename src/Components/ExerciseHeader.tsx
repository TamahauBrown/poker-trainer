import * as React from "react";
import {invoke} from "@tauri-apps/api/tauri";

// @ts-ignore
import {EquityResponse} from "../PokerModels/BEVars";

let equity;

export function ExerciseHeader() {
    let full_path;
    const image_path = "./Images/fronts/";
    const svg = ".svg";

    function equity_estimate(exercise : string) {
        document.getElementById("chances").innerText = "What are your chances of winning?";
        console.log("Entering " + exercise);
        let result = invoke(exercise, {});
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
            full_path = image_path + card + svg;
            console.log(full_path);
            let playerCard = document.getElementById(cards[i]) as HTMLImageElement;
            playerCard.src = full_path;
            playerCard.style.opacity = "100%";
            i++;
        });
    }

    function board_cards(entries) {
        let cards = ["flop1", "flop2", "flop3", "turn", "river"]
        let i = 0;
        for (let i = entries.length; i < cards.length; i++) {
            document.getElementById(cards[i]).style.opacity = "0%";
        }
        entries.forEach(function (card) {
            full_path = image_path + card + svg;
            let boardCard = document.getElementById(cards[i]) as HTMLImageElement;
            boardCard.src = full_path;
            boardCard.style.opacity = "100%";
            i++;
        });

    }

    function opponent_cards(entries) {
        let cards = ["ohl3", "ohr3", "ohl2", "ohr2", "ohl4", "ohr4", "ohl1", "ohr1", "ohl5", "ohr5"];
        //let percentages = ["percentage3", "percentage4", "percentage2", "percentage1", "percentage5"];
        for (let i = entries.length; i < cards.length; i++) {
            document.getElementById(cards[i]).style.opacity = "0%";
        }
        let i = 0;
        // let j = 0;
        entries.forEach(function (hand) {
                hand.forEach(function (card) {
                    //let calculateWidth = 180 - 90 /  (10 - (cards.length - hand.length)); //REX TODO: Come up with a better math forumla here for opponent card sizes, 90% is all 5 cards, 180% is for 1 pair of cards.
                    // document.getElementById(cards[i]).style.display = "block";
                    document.getElementById(cards[i]).style.opacity = "100%";
                    full_path = image_path + card + svg;
                    let opponentCard = document.getElementById(cards[i]) as HTMLImageElement;
                    //opponentCard.style.width = calculateWidth.toString() + "%";
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
        <div id="exercise">
            <div className="exItem">
                <img src={"../Exercises/equity-estimate.png"} className="exShape" id="ex1" onClick={() => equity_estimate('equity_estimate')}/>
                <div className="exerciseText" id="ex1text">Chances</div>
            </div>
            <div className="exItem">
                <img src={"../Exercises/chances_2.png"} className="exShape" id="ex2" onClick={() => equity_estimate('equity_estimate_2')} />
                <div className="exerciseText" id="ex2text" >Chances 2</div>
            </div>
            <div className="exItem">
                <img src={"../Exercises/chances_3.png"} className="exShape" id="ex3" onClick={() => equity_estimate('equity_estimate_3')} />
                <div className="exerciseText" id="ex3text" >Chances 3</div>
            </div>
            <div className="exItem">
                <div className="exShape" id="ex4" />
                <div className="exerciseText" id="ex4text">Ex 4</div>
            </div>
        </div>
    );
}

export {equity}