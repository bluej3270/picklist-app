import * as React from 'react';
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import {Checkbox, Divider, Typography} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BasicStack() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Item>
                    <Stack direction={"row"} spacing={2} divider={<Divider orientation={"vertical"} flexItem />}>
                        <Item>
                            <Checkbox {...label} />
                        </Item>
                        <Item>
                            <Typography variant={"body1"}>1339</Typography>
                        </Item>
                        <Item>
                            <Typography variant={"body1"}>Angelbotics</Typography>
                        </Item>
                    </Stack>
                </Item>
            </Stack>
        </Box>
    );
}