import {Divider, IconButton, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";
import * as React from "react";
import {Draggable} from "react-beautiful-dnd";


export default function PickListItem({name, number, rank}) {
    return <Draggable key={rank} draggableId={name} index={rank}>
        {(provided) => (
            <Stack direction={"row"} spacing={2} divider={<Divider orientation={"vertical"} flexItem />} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <IconButton aria-label={"picked"}>
                    <RemoveIcon />
                </IconButton>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={25}>{rank}</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={25}>{number}</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={175}>{name}</Typography>
            </Stack>
            )}
    </Draggable>


}