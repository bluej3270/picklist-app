import {
    Button, ButtonGroup,
    Container,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid, TextField,
    Typography
} from "@mui/material";
import Stack from "@mui/material/Stack";
import SortedList from "./SortedList";
import PickList from "./PickList";
import React from "react";

export default function MainPage() {
    // const teams = [[1, "Team 1"],[2, "Team 2"],[3, "Team 3"],[4, "Team 4"],[5, "Team 5"],[6, "Team 6"],[7, "Team 7"],[9998, "Team 9998"],[9997, "Team 9997"],[9996, "Team 9996"],[1339, "Angelbotics"], [1410, 'The Kraken'], [9999, "Team This Team Has A Super Long Name Because Why Not"], [1619, "Up-A-Creek"], [1111, "Demo Team"], [4550, "Sumthin's Bruin"], [1799, "Wired Up!"], [5493, "SMAbotics"], [118, "Robonaughts"], [1706, "Ratchet Rocker"], [2468, "Team Appreciate"]]
    const teams = [
        {
            number: 1,
            name: 'team 1'
        },{
            number: 2,
            name: 'team 2'
        },{
            number: 3,
            name: 'team 3'
        },{
            number: 4,
            name: 'team 4'
        },{
            number: 5,
            name: 'team 5'
        },{
            number: 6,
            name: 'team 6'
        },{
            number: 7,
            name: 'team 7'
        },{
            number: 9998,
            name: 'team 9998'
        },{
            number: 9997,
            name: 'team 9997'
        },{
            number: 9996,
            name: 'team 9996'
        },{
            number: 1339,
            name: 'Angelbotics'
        },{
            number: 1410,
            name: 'The Kraken'
        },{
            number: 9999,
            name: 'This Team Has A Super Long Name Because I Need It To'
        },{
            number: 1619,
            name: 'Up A Creek'
        },{
            number: 1111,
            name: 'Team !!!!'
        },{
            number: 4550,
            name: 'Sumthins Bruin'
        },{
            number: 1799,
            name: 'Wired Up'
        },{
            number: 5493,
            name: 'SMAbotics'
        },{
            number: 118,
            name: 'The Robonaughts'
        },{
            number: 2468,
            name: 'Team Appreciate'
        }
    ]
    return (
        <Container maxWidth={"lg"}>
            <Grid container spacing={2} marginTop={5}>
                <Grid item xs={5}>
                    <Stack alignItems={"center"} spacing={1}>
                        <Typography marginBottom={2}>Sorted List</Typography>
                        <SortedList teams={teams} />
                    </Stack>
                </Grid>
                <Grid item xs={5}>
                    <Stack alignItems={"center"} spacing={1}>
                        <Typography marginBottom={2}>Picklist</Typography>
                        <PickList />
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <ButtonGroup>
                        <Button variant={"outlined"}>Add</Button>
                        <Button variant={"outlined"}>Sort</Button>
                        <Button variant={"outlined"}>Clear</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Container>
    );
}