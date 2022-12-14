import * as React from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Menu from '@mui/icons-material/Menu';

// @ts-ignore
import { EquityResponse } from "../PokerModels/BEVars";

let full_path;
const image_path = "./Images/fronts/";
const svg = ".svg";
const chances = document.getElementById("chances")

export function equity_estimate(exercise: string) {

    if(chances != null) {
        chances!.innerText = "What are your chances of winning?";
    }
        let result: Promise<EquityResponse> = invoke(exercise, {});
        result.then(cards => {
            display_hands(cards);
        });
}

function display_hands(cards: EquityResponse) {
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
    for (let i = entries.length; i < cards.length; i++) {
        document.getElementById(cards[i]).style.opacity = "0%";
    }
    let i = 0;
    // let j = 0;
    entries.forEach(function (hand) {
        hand.forEach(function (card) {
            document.getElementById(cards[i]).style.opacity = "100%";
            full_path = image_path + card + svg;
            let opponentCard = document.getElementById(cards[i]) as HTMLImageElement;
            opponentCard.src = full_path;
            i++;
        });
    });
}

export function ExerciseHeader() {
    let sideBarVisible = false;

    function toggle_sidebar() {
        const containerClassList = document.getElementById("exercise")!.classList;
        if (sideBarVisible) {
            containerClassList.add('hidden');
        } else {
            containerClassList.remove('hidden')
        }
        sideBarVisible = !sideBarVisible;
    }

    return (
        <div id="headerContainer">
            <Menu color={"primary"} width="75%" id="exerciseMenuIcon" onClick={() => toggle_sidebar()} />
            <div id="exercise" className="hidden">
                <div className="exItem">
                    <img src={"../Exercises/equity-estimate.png"} className="exShape" id="ex1" alt="Exercise 1" onClick={() => equity_estimate('equity_estimate')} />
                    <div className="exerciseText" id="ex1text">Chances</div>
                </div>
                <div className="exItem">
                    <img src={"../Exercises/chances_2.png"} className="exShape" id="ex2" alt="Exercise 2" onClick={() => equity_estimate('equity_estimate_2')} />
                    <div className="exerciseText" id="ex2text" >Chances 2</div>
                </div>
                <div className="exItem">
                    <img src={"../Exercises/chances_3.png"} className="exShape" id="ex3" alt="Exercise 3" onClick={() => equity_estimate('equity_estimate_3')} />
                    <div className="exerciseText" id="ex3text" >Chances 3</div>
                </div>
                <div className="exItem">
                    <div className="exShape" id="ex4" />
                    <div className="exerciseText" id="ex4text">Ex 4</div>
                </div>
            </div>
        </div>
    );
}