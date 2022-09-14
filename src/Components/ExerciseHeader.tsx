import * as React from "react";
import {invoke} from "@tauri-apps/api/tauri";

export function ExerciseHeader() {
    const board: String[] = [];
    const opp_hands: String[] = [];
    const player_hands: String[] = [];
    var full_path;
    const image_path = "./Images/fronts/";
    const svg = ".svg";

    function hands(res) {
        var entries = Object.entries(res);
        //board = entries[0][1][0];
        //opp_hands = entries[2][1][0];
        player_cards(entries);
    }

    function player_cards(entries){
        //Player hands
        const left = entries[2][1][0][0];
        const right = entries[2][1][0][1];

        //Left player hand
        entries = Object.entries(left);
        full_path = image_path + entries[0][1].toString().toLowerCase() + "s_" + entries[1][1].toString().toLowerCase() + svg;
        console.log(full_path);
        const leftCard = document.getElementById("leftCard") as HTMLImageElement;
        leftCard.src = full_path;
        //Right player hand
        entries = Object.entries(right);
        player_hands.push(full_path);
        //console.log(player_hands);
    }

    function equity_estimate() {
        let result = invoke('equity_estimate', {});
        result.then(res => {
            hands(res);
            //console.log(board);
            //console.log(opp_hands);
            //console.log(player_hands);
        });
        //console.log(value);
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