//import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <head>
                <title>Poker Trainer</title>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&display=swap" rel="stylesheet"/>
            </head>
            <header className="App-header">
                <div className="exercise">
                    <div className="exShape" id="ex1"></div>
                    <div className="exShape" id="ex2"></div>
                    <div className="exShape" id="ex3"></div>
                    <div className="exShape" id="ex4"></div>
                    <div className="exerciseText" id="ex1text">Exercise 1</div>
                    <div className="exerciseText" id="ex2text">Exercise 2</div>
                    <div className="exerciseText" id="ex3text">Exercise 3</div>
                    <div className="exerciseText" id="ex4text">Exercise 4</div>
                </div>
                <div className="sidebar"></div>
                <div className="floor">
                    <div className="pokerTable">
                        <img src={"./Images/backs/red.svg"} alt="Player card left" className="playerCards"
                             id="leftCard"/>
                        <img src={"./Images/backs/red.svg"} alt="Player card right" className="playerCards"
                             id="rightCard"/>
                        <img src={"./Images/backs/red.svg"} alt="Flop 1" className="tableCards" id="flop1"/>
                        <img src={"./Images/backs/red.svg"} alt="Flop 2" className="tableCards" id="flop2"/>
                        <img src={"./Images/backs/red.svg"} alt="Flop 3" className="tableCards" id="flop3"/>
                        <img src={"./Images/backs/red.svg"} alt="Turn" className="tableCards" id="turn"/>
                        <img src={"./Images/backs/red.svg"} alt="River" className="tableCards" id="river"/>
                        <img src={"./Images/backs/red.svg"} alt="Hand1Left" className="hand1" id="oh1l"/>
                        <img src={"./Images/backs/red.svg"} alt="Hand1Right" className="hand1" id="ohr1"/>
                        <img src={"./Images/backs/red.svg"} alt="OpponentHand2Left" className="hand2" id="ohl2"/>
                        <img src={"./Images/backs/red.svg"} alt="OpponentHand2Right" className="hand2" id="ohr2"/>
                        <img src={"./Images/backs/red.svg"} alt="OpponentHand3Right" className="hand3" id="ohl3"/>
                        <img src={"./Images/backs/red.svg"} alt="OpponentHand4Left" className="hand4" id="ohr3"/>
                        <img src={"./Images/backs/red.svg"} alt="OpponentHand3Right" className="hand4" id="ohl4"/>
                        <img src={"./Images/backs/red.svg"} alt="OpponentHand5Left" className="hand5" id="ohr4"/>
                        <img src={"./Images/backs/red.svg"} alt="OpponentHand3Right" className="hand4" id="ohl5"/>
                        <img src={"./Images/backs/red.svg"} alt="OpponentHand5Left" className="hand5" id="ohr5"/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;