//import React from 'react';
import './App.scss';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

// @ts-ignore
import {PokerTable} from "./Components/PokerTable.tsx";
// @ts-ignore
import {ExerciseHeader} from "./Components/ExerciseHeader.tsx";
// @ts-ignore
import {Sidebar} from "./Components/Sidebar.tsx"


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

    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&display=swap" rel="stylesheet"/>
            <header className="App-header">
                <Sidebar> </Sidebar>
               <ExerciseHeader> </ExerciseHeader>
                <div id="floor">
                    <PokerTable> </PokerTable>

                    <div id="sliderFunctions">
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
                                        size="small"
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
                                </Grid>
                            </Grid>
                        </Box>
                        <div id="submitGuess">
                            <Button variant="contained" endIcon={<SendIcon/>}>
                                SUBMIT
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;