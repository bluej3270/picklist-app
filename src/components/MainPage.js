import {
    Button,
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
    const teams = [[1, "Team 1"],[2, "Team 2"],[3, "Team 3"],[4, "Team 4"],[5, "Team 5"],[6, "Team 6"],[7, "Team 7"],[9998, "Team 9998"],[9997, "Team 9997"],[9996, "Team 9996"],[1339, "Angelbotics"], [1410, 'The Kraken'], [9999, "Team This Team Has A Super Long Name Because Why Not"], [1619, "Up-A-Creek"], [1111, "Demo Team"], [4550, "Sumthin's Bruin"], [1799, "Wired Up!"], [5493, "SMAbotics"], [118, "Robonaughts"], [1706, "Ratchet Rocker"], [2468, "Team Appreciate"]]

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
                    <Stack spacing={2} marginTop={5}>
                        <Button variant={"outlined"}>Add</Button>
                        <Button variant={"outlined"}>Sort</Button>
                        <Button variant={"outlined"}>Clear</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}