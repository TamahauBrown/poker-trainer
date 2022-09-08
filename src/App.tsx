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
                    <div className="exShape" id="ex1"> </div>
                    <div className="exShape" id="ex2"> </div>
                    <div className="exShape" id="ex3"> </div>
                    <div className="exShape" id="ex4"> </div>
                    <div className="exerciseText" id="ex1text">Exercise 1</div>
                    <div className="exerciseText" id="ex2text">Exercise 2</div>
                    <div className="exerciseText" id="ex3text">Exercise 3</div>
                    <div className="exerciseText" id="ex4text">Exercise 4</div>
                </div>
                <div className="sidebar"> </div>
                <div className="PokerTable">
                    <h1 className="TableText"> Poker Trainer </h1>
                </div>

            </header>
        </div>
    );
}

export default App;