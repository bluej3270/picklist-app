import {
    Box,
    Card, Checkbox,
    Container, Divider,
    Grid, IconButton, ListItemText, Menu, MenuItem,
    Typography
} from "@mui/material";
import Stack from "@mui/material/Stack";
import React, {useEffect, useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {Remove, MoreHoriz, HighlightOff} from "@mui/icons-material";
import {bindMenu, bindTrigger, usePopupState} from "material-ui-popup-state/hooks";

export default function MainPage() {
    const teams = [
        {
            number: 1,
            name: 'team 1',
            picked: false,
            flagged: false
        }, {
            number: 2,
            name: 'team 2',
            picked: false,
            flagged: false

        }, {
            number: 3,
            name: 'team 3',
            picked: false,
            flagged: false

        }, {
            number: 4,
            name: 'team 4',
            picked: false,
            flagged: false

        }, {
            number: 5,
            name: 'team 5',
            picked: false,
            flagged: false

        }, {
            number: 6,
            name: 'team 6',
            picked: false,
            flagged: false

        }, {
            number: 7,
            name: 'team 7',
            picked: false,
            flagged: false

        }, {
            number: 9998,
            name: 'team 9998',
            picked: false,
            flagged: false

        }, {
            number: 9997,
            name: 'team 9997',
            picked: false,
            flagged: false

        }, {
            number: 9996,
            name: 'team 9996',
            picked: false,
            flagged: false

        }, {
            number: 1339,
            name: 'Angelbotics',
            picked: false,
            flagged: false

        }, {
            number: 1410,
            name: 'The Kraken',
            picked: false,
            flagged: false

        }, {
            number: 9999,
            name: 'This Team Has A Super Long Name Because I Need It To',
            picked: false,
            flagged: false

        }, {
            number: 1619,
            name: 'Up A Creek',
            picked: false,
            flagged: false

        }, {
            number: 1111,
            name: 'Team !!!!',
            picked: false,
            flagged: false

        }, {
            number: 4550,
            name: 'Sumthins Bruin',
            picked: false,
            flagged: false

        }, {
            number: 1799,
            name: 'Wired Up',
            picked: false,
            flagged: false

        }, {
            number: 5493,
            name: 'SMAbotics',
            picked: false,
            flagged: false

        }, {
            number: 118,
            name: 'The Robonaughts',
            picked: false,
            flagged: false

        }, {
            number: 2468,
            name: 'Team Appreciate',
            picked: false,
            flagged: false

        }
    ]

    const [allTeams, setAllTeams] = useState(teams);

    const [winReady, setWinReady] = useState(false);

    const sortedPopupMenu = usePopupState({variant: 'popover', popupId: 'sortedPopupMenu'})

    function sortFunction(a, b) {
        if (a.number === b.number) {
            return 0;
        } else {
            return (a.number < b.number) ? -1 : 1;
        }
    }

    const [sortedList, setSortedList] = useState(allTeams.sort(sortFunction));


    useEffect(() => {
        setWinReady(true);
        setSortedList(allTeams.sort(sortFunction))
    }, [allTeams])

    function SortedListItem(team) {
        function handleOnChanged(event) {
            let tempList = JSON.parse(JSON.stringify(allTeams));

            for (const index in tempList) {
                if (tempList[index].number.toString() === event.target.name) {
                    tempList[index].picked = event.target.checked;
                }
            }
            setAllTeams(tempList);

        }

        return (<Stack key={team.team.number.toString()} direction={"row"} spacing={2}
                       divider={<Divider orientation={"vertical"} height={25} flexItem/>}>
            <IconButton aria-label={"picked"}>
                <Remove/>
            </IconButton>
            <Checkbox size={"small"} onChange={handleOnChanged} name={team.team.number} checked={team.team.picked}/>
            <Typography variant={"body1"} display={"flex"} alignItems={"center"}
                        width={50}>{team.team.number}</Typography>
            <Typography variant={"body1"} display={"flex"} alignItems={"center"}
                        width={175}>{team.team.name}</Typography>
        </Stack>)
    }

    function PickListItem({team, index}) {

        function handleOnChanged(event) {
            let tempList = JSON.parse(JSON.stringify(allTeams));

            for (const index in tempList) {
                if (tempList[index].number.toString() + " pick" === event.target.name) {
                    tempList[index].flagged = event.target.checked;
                }
            }
            setAllTeams(tempList);
        }

        return (
            <div>
                {!team.picked && <Draggable key={team.number.toString() + '1'} draggableId={team.name} index={index}>
                    {(provided) => (
                        <div style={{backgroundColor: team.flagged ? "#fffbb9" : "white"}}>
                            <Stack direction={"row"} spacing={2} divider={<Divider orientation={"vertical"} flexItem/>}
                                   ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <Checkbox size={"small"} onChange={handleOnChanged} name={team.number + " pick"}
                                          checked={team.flagged}/>
                                <Typography variant={"body1"} display={"flex"} alignItems={"center"}
                                            width={50}>{index + 1}</Typography>
                                <Typography variant={"body1"} display={"flex"} alignItems={"center"}
                                            width={50}>{team.number}</Typography>
                                <Typography variant={"body1"} display={"flex"} alignItems={"center"}
                                            width={175}>{team.name}</Typography>
                            </Stack>
                        </div>
                    )}
                </Draggable>}
            </div>)


    }

    function SortedList() {
        return (<div>
            <Stack direction={"row"} spacing={2} divider={<Divider orientation={"vertical"} height={25} flexItem/>}>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={40}
                            height={50}>Delete</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={38}
                            height={50}>Picked</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={50}
                            height={50}>Number</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={175}
                            height={50}>Name</Typography>
            </Stack>
            <Divider variant="fullWidth" orientation="horizontal"/>
            {sortedList.map((team) => (
                <SortedListItem team={team} key={"SortedTeamItem: " + team.name}/>
            ))}
        </div>)
    }

    const reorder = (array, startIndex, endIndex) => {
        const [removed] = array.splice(startIndex, 1);
        array.splice(endIndex, 0, removed);

        return array;
    };
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        setAllTeams(reorder(
            allTeams,
            result.source.index,
            result.destination.index
        ));
    };

    function PickList() {

        return (<div>
            <Stack direction={"row"} spacing={2}
                   divider={<Divider orientation={"vertical"} height={25} flexItem/>}>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={38}
                            height={50}>Flag</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={50}
                            height={50}>Rank</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={50}
                            height={50}>Number</Typography>
                <Typography variant={"body1"} display={"flex"} alignItems={"center"} width={175}
                            height={50}>Name</Typography>
            </Stack>
            <Divider variant="fullWidth" orientation="horizontal"/>
            {winReady && <Droppable droppableId="droppable">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {allTeams.map((team, index) => (<div>
                                <PickListItem team={team} index={index} key={team.name}/>
                            </div>
                        ))}
                        {provided.placeholder}
                    </div>)}
            </Droppable>}

        </div>)
    }

    return (
        <Container maxWidth={"lg"}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Grid container spacing={2} marginTop={5} sx={{mb: 10}}>
                    <Grid item xs={5}>
                        <Card sx={{height: "100%", width: "auto", boxShadow: 5}}>
                            <Stack alignItems={"center"} spacing={1}>
                                <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"center"}
                                       width="100%">
                                    <Typography variant="h4" marginBottom={2}>Sorted List</Typography>
                                    <Box sx={{w: "100%"}}/>
                                    <IconButton
                                        variant="large" {...bindTrigger(sortedPopupMenu)}><MoreHoriz/></IconButton>
                                    <Menu {...bindMenu(sortedPopupMenu)}>
                                        <MenuItem onClick={sortedPopupMenu.close}>
                                            <HighlightOff fontSize="medium"/>
                                            <ListItemText sx={{ml: 1}}>Clear Picked Checkboxes</ListItemText>
                                        </MenuItem>
                                    </Menu>
                                </Stack>
                                <SortedList/>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card sx={{height: "100%", width: "auto", boxShadow: 5}}>
                            <Stack alignItems={"center"} spacing={1}>
                                <Typography variant="h4" marginBottom={2}>Picklist</Typography>
                                <PickList/>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </DragDropContext>
        </Container>
    );
}

