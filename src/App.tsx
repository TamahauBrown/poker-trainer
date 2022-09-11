//import React from 'react';
import './App.scss';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import {invoke} from '@tauri-apps/api/tauri'

// import VolumeUp from '@mui/icons-material/VolumeUp';
const Input = styled(MuiInput)`
  width: 42px;
`;

function App() {
    const [value, setValue] = React.useState<number | string | Array<number | string>>(
        30,
    );

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    function submit() {
        let result = invoke('equity_estimate', {});
        result.then(res => {
            console.log(res)
        });
        console.log(value);
    }

    return (
        <div className="App">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&display=swap" rel="stylesheet"/>
            </head>
            <header className="App-header">
                <div className="sidebar">
                    <img src={"./Images/other/spades_ace_simple.svg"} width="50%" id="logo"/>
                </div>
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
                <div id="floor">
                    <div id="pokerTable">
                            <div id="playerCards">
                                <img src={"./Images/backs/red.svg"} alt="Player card left" className="playerCards"
                                     id="leftCard"/>
                                <img src={"./Images/backs/red.svg"} alt="Player card right" className="playerCards"
                                     id="rightCard"/>
                            </div>
                            <div id="tableCards">
                                <img src={"./Images/backs/red.svg"} alt="Flop 1" className="tableCards" id="flop1"/>
                                <img src={"./Images/backs/red.svg"} alt="Flop 2" className="tableCards" id="flop2"/>
                                <img src={"./Images/backs/red.svg"} alt="Flop 3" className="tableCards" id="flop3"/>
                                <img src={"./Images/backs/red.svg"} alt="Turn" className="tableCards" id="turn"/>
                                <img src={"./Images/backs/red.svg"} alt="River" className="tableCards" id="river"/>
                            </div>
                            <div id="oppCards">
                                <img src={"./Images/backs/red.svg"} alt="Hand1Left" className="hand1" id="ohl1"/>
                                <img src={"./Images/backs/red.svg"} alt="Hand1Right" className="hand1" id="ohr1"/>
                                <img src={"./Images/backs/red.svg"} alt="OpponentHand2Left" className="hand2"
                                     id="ohl2"/>
                                <img src={"./Images/backs/red.svg"} alt="OpponentHand2Right" className="hand2"
                                     id="ohr2"/>
                                <img src={"./Images/backs/red.svg"} alt="OpponentHand3Right" className="hand3"
                                     id="ohl3"/>
                                <img src={"./Images/backs/red.svg"} alt="OpponentHand4Left" className="hand4"
                                     id="ohr3"/>
                                <img src={"./Images/backs/red.svg"} alt="OpponentHand3Right" className="hand4"
                                     id="ohl4"/>
                                <img src={"./Images/backs/red.svg"} alt="OpponentHand5Left" className="hand5"
                                     id="ohr4"/>
                                <img src={"./Images/backs/red.svg"} alt="OpponentHand3Right" className="hand4"
                                     id="ohl5"/>
                                <img src={"./Images/backs/red.svg"} alt="OpponentHand5Left" className="hand5"
                                     id="ohr5"/>
                            </div>
                    </div>
                    <Box sx={{width: 500}} className="slider">
                        <Typography id="input-slider" gutterBottom>
                            <b id="chances">What are your chances of winning?</b>
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    value={typeof value === 'number' ? value : 0}
                                    onChange={handleSliderChange}
                                    aria-labelledby="input-slider"
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    id="chanceBox"
                                    value={value}
                                    size="medium"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    inputProps={{
                                        step: 10,
                                        min: 0,
                                        max: 100,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />

                                <button onClick={submit} id="submitGuess"> SUBMIT</button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </header>
        </div>
    );
}

export default App;