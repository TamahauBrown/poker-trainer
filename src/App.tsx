//import React from 'react';
import './App.scss';
import * as React from 'react';

// @ts-ignore
import {PokerTable} from "./Components/PokerTable.tsx";
// @ts-ignore
import {ExerciseHeader} from "./Components/ExerciseHeader.tsx";
// @ts-ignore
import {Sidebar} from "./Components/Sidebar.tsx"

function App() {
    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&display=swap" rel="stylesheet"/>
            <Sidebar />
            <header className="App-header">

                <ExerciseHeader />
                <PokerTable />
            </header>
        </div>
    );
}

export default App;