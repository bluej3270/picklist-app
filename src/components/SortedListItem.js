import {Checkbox, Divider, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SortedListItem({ number, name }) {
    return <Stack direction={"row"} spacing={2} divider={<Divider orientation={"vertical"} height={25} flexItem />}>
        <Checkbox {...label} size={"small"} />
        <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={25}>{number}</Typography>
        <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={175}>{name}</Typography>
    </Stack>
}