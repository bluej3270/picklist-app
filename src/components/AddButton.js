import React from "react"
import {
    Button,
    ButtonGroup,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";


export default function AddButton(picklist, updatePicklist) {

    const [teamNumber, setTeamNumber] = React.useState('')
    const [teamName, setTeamName] = React.useState('')

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseAdd = () => {
        //If both team number and team name have a value, add a team to the teams array with those values, than close the pop-up. If one doesn't have a value, show an error. Done: If neither have a value, close the pop up and do nothing.
        if (teamName != ' ' && teamNumber != '') {
            const arr = [...picklist.picklist]
            arr.push({number: parseInt(teamNumber), name: teamName, picked: false})

        //    Update Picklist
        } else {
            //If neither team number nor team name have a value, close the pop-up without doing anything.
            setOpen(false);
        }
    };

    const handleClose = () => {
        //Close the pop-up without doing anything if cancel is pressed.
        setOpen(false);
    }

    return(
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                Add
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Team To Picklist</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please type the team number and name, than press add.
                    </DialogContentText>
                    <TextField
                        error={false}
                        autoFocus
                        margin="dense"
                        id="number"
                        label="Team Number"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(event) => {setTeamNumber(event.target.value)}}
                    />
                    <TextField
                        error={false}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Team Name"
                        fullWidth
                        variant="standard"
                        onChange={(event) => {setTeamName(event.target.value)}}
                    />
                </DialogContent>
                <DialogActions>
                    <ButtonGroup>
                        <Button variant={'contained'} onClick={handleClose}>Cancel</Button>
                        <Button variant={'contained'} onClick={handleCloseAdd}>Add</Button>
                    </ButtonGroup>
                </DialogActions>
            </Dialog>
        </>
    );
}