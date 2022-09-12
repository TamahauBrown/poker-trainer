import * as React from "react";
import {invoke} from "@tauri-apps/api/tauri";

export function ExerciseHeader() {
    function equity_estimate() {
        let result = invoke('equity_estimate', {});
        result.then(res => {
            console.log(res)
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