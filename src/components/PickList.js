import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {Divider, IconButton, Typography} from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import * as React from "react";


export default function PickList() {
    return <Box sx={{width : '100%'}}>
        <Stack alignItems={"center"} sx={{maxHeight: 800, overflow: 'auto'}} spacing={2}>
            <Stack direction={"row"} spacing={2} divider={<Divider orientation={"vertical"} flexItem />}>
                <IconButton aria-label={"picked"}>
                    <RemoveIcon />
                </IconButton>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={25}>1</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={25}>1339</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={175}>Anglebotics</Typography>
            </Stack>
        </Stack>
    </Box>
}