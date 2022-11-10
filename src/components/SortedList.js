import * as React from 'react';
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import SortedListItem from "./SortedListItem";

function sortFunction(a, b) {
    if (a.number === b.number) {
        return 0;
    }
    else {
        return (a.number < b.number) ? -1 : 1;
    }
}

export default function PickList({teams}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack alignItems={"center"} sx={{maxHeight: 800, overflow: 'auto'}} spacing={2}>
                {
                    (teams.sort(sortFunction)).map(({number, name}) => (
                        <SortedListItem number={number} name={name} />
                    ))}
            </Stack>
        </Box>
    );
}