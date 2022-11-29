import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as React from "react";
import PickListItem from "./PickListItem";
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import {useEffect, useState} from "react";

// const teams = [{
//     number: 1339,
//     name: 'Anglebotics'
// },{
//     number: 1410,
//     name: "The Kraken"
// },{
//     number: 1619,
//     name: "Up A Creek"
// }]

export default function PickList(picklist) {

    const [picklistLocal, setPicklistLocal] = useState(picklist);

    useEffect(() => {



    }, [picklist, picklistLocal])

    function handleOnDragEnd(result) {
        //If the draggable is dragged outside the droppable, return it to its original position. If the item is in the same place, do nothing. Otherwise, Create a new copy of the array of teams, remove the item, than add it back to the array in its new location. Then, update the rendered array

        //If the draggable is dragged outside the droppable, return it to its original position
        if (!result.destination) return;

        //If the item is in the same place, no need to change the array
        if (result.destination.index === result.source.index) {
            return;
        }

        console.log(picklist)

        //Create a new copy of the array of teams, remove the item, than add it back to the array in its new location.
        const items = [...picklist.picklist]
        const [removed] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, removed);


        //Update the rendered array
        updatePicklistFunction(items);
        console.log("Items \n" + items);


    }

    function removeItem(item, index) {
        if(window.confirm("Are you sure you want to delete this task?")){
            let taskList = [...this.state.taskList]
            taskList.splice(index, 1);
            this.setState({taskList: taskList})
        }
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={'PickList'}>
                {(provided) => (
                    <Box sx={{width : '100%'}} ref={provided.innerRef} {...provided.droppableProps}>
                        <Stack alignItems={"center"} sx={{maxHeight: 800, overflow: 'auto'}} spacing={2}>
                            {(picklist.picklist.map(({number, name}, index) => (
                                <PickListItem rank={index} number={number} name={name} />
                            )))}
                            {provided.placeholder}
                        </Stack>
                    </Box> )}
            </Droppable>
        </DragDropContext>
    )

}