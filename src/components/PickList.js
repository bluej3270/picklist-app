import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as React from "react";
import PickListItem from "./PickListItem";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {useState} from "react";

const teams = [{
    number: 1339,
    name: 'Anglebotics'
},{
    number: 1410,
    name: "The Kraken"
},{
    number: 1619,
    name: "Up A Creek"
}]

export default function PickList() {

    const [picklist, updatePicklist] = useState(teams);

    function handleOnDragEnd(result) {
        //If the draggable is dragged outside the droppable, return it to its original position
        // if (!result.destination) return;

        //Create a new copy of the array of teams, remove the item, than add it back to the array in its new location.
        // const items = Array.from(picklist);
        // const [reorderedItem] = items.splice(result.source.index, 1);
        // items.splice(result.destination.index, 0, reorderedItem);

        //Update the rendered array
        // updatePicklist(items);

    }

    return <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={'PickList'}>
            {(provided) => (
            <Box sx={{width : '100%'}} ref={provided.innerRef} {...provided.droppableProps}>
                <Stack alignItems={"center"} sx={{maxHeight: 800, overflow: 'auto'}} spacing={2}>
                    {(picklist.map(({number, name}, index) => (
                        <PickListItem rank={index} number={number} name={name} />
                    )))}
                    {provided.placeholder}
                </Stack>
            </Box> )}
        </Droppable>
    </DragDropContext>

}