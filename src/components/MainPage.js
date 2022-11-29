import {
    Button, ButtonGroup,
    Container,
    Grid,
    Typography
} from "@mui/material";
import Stack from "@mui/material/Stack";
import SortedList from "./SortedList";
import PickList from "./PickList";
import React, {useState} from "react";
import AddButton from "./AddButton";

export default function MainPage() {
 const teams = [
        {
            number: 1,
            name: 'team 1',
            picked: false
        },{
            number: 2,
            name: 'team 2',
            picked: false
        },{
            number: 3,
            name: 'team 3',
            picked: false
        },{
            number: 4,
            name: 'team 4',
            picked: false
        },{
            number: 5,
            name: 'team 5',
            picked: false
        },{
            number: 6,
            name: 'team 6',
            picked: false
        },{
            number: 7,
            name: 'team 7',
            picked: false
        },{
            number: 9998,
            name: 'team 9998',
            picked: false
        },{
            number: 9997,
            name: 'team 9997',
            picked: false
        },{
            number: 9996,
            name: 'team 9996',
            picked: false
        },{
            number: 1339,
            name: 'Angelbotics',
            picked: false
        },{
            number: 1410,
            name: 'The Kraken',
            picked: false
        },{
            number: 9999,
            name: 'This Team Has A Super Long Name Because I Need It To',
            picked: false
        },{
            number: 1619,
            name: 'Up A Creek',
            picked: false
        },{
            number: 1111,
            name: 'Team !!!!',
            picked: false
        },{
            number: 4550,
            name: 'Sumthins Bruin',
            picked: false
        },{
            number: 1799,
            name: 'Wired Up',
            picked: false
        },{
            number: 5493,
            name: 'SMAbotics',
            picked: false
        },{
            number: 118,
            name: 'The Robonaughts',
            picked: false
        },{
            number: 2468,
            name: 'Team Appreciate',
            picked: false
        }
    ]

    const [picklist, updatePicklist] = useState(teams)

    const updatePickListFunction = (data) => {
     updatePicklist(data);
    }

    return (
        <Container maxWidth={"lg"}>
            <Grid container spacing={2} marginTop={5}>
                <Grid item xs={5}>
                    <Stack alignItems={"center"} spacing={1}>
                        <Typography marginBottom={2}>Sorted List</Typography>
                        <SortedList teams={picklist} />
                    </Stack>
                </Grid>
                <Grid item xs={5}>
                    <Stack alignItems={"center"} spacing={1}>
                        <Typography marginBottom={2}>Picklist</Typography>
                        <PickList picklist={picklist} updatePicklist={updatePickListFunction} />
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <ButtonGroup>
                        <AddButton picklist={picklist} updatePicklist={updatePickListFunction} />
                        <Button variant={"contained"}>Sort</Button>
                        <Button variant={"contained"}>Clear</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Container>
    );
}