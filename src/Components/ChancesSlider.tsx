// import VolumeUp from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider';
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import * as React from "react"

import { invoke } from '@tauri-apps/api/tauri';
import { EquityEstimateUserInputResponse } from '../PokerModels/BEVars';

const Input = styled(MuiInput)`
  width: 42px;
`;

export function ChancesSlider() {
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

    const onSubmit = () => {
        let chancesText = document.getElementById("chances")!;
        let request: Promise<EquityEstimateUserInputResponse> = invoke("equity_estimate_user_input", { userInput: value })
        request.then(response => {
            console.log(response);
            if (response.close_enough) {
                chancesText.innerText = "Correct, your chances are " + response.true_equity + "%";
            }
            else {
                chancesText.innerText = "Sorry, the correct value was: " + response.true_equity + "%";
            }
        })
    }

    return (
        <div id="sliderFunctions">
            <Box sx={{ width: 500 }} className="slider">
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
                            disableUnderline={true}
                            id="chanceBox"
                            value={value + "%"}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'text',
                                'aria-labelledby': 'input-slider',

                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <div id="submitGuess">
                <Button variant="contained" onClick={onSubmit}>
                    SUBMIT
                </Button>
            </div>
        </div>
    )
}