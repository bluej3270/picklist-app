import * as React from 'react';
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import SortedListItem from "./SortedListItem";

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

export default function BasicStack({teams}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack alignItems={"center"} sx={{maxHeight: 800, overflow: 'auto'}} spacing={2}>
                {
                    (teams.sort(sortFunction)).map((team) => (
                        <SortedListItem number={team[0]} name={team[1]} />
                    ))}
            </Stack>
        </Box>
    );
}