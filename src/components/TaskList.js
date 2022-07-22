import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Button from '@mui/material/Button'
import React from "react";

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        overflow: 'scroll',
        '&::-webkit-scrollbar': { width: 0 },
        flexDirection: 'column',
        maxHeight: "30vh",
        width: "30vw",
        backgroundColor: "#EFEFEF",
        zIndex: 3,
        marginTop: "300px"
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: "1px solid white",
        cursor: "pointer"
    },
    btn: {
        height: "6vh",
        width: "20vw",
    },
    name: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "30px",
    }

}))
export default function TaskList() {
    const List = [
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
        "task1",
    ]
    const classes = useStyles()
    const [task, setTask] = React.useState(false)
    const taskList = () => {
        setTask(true)
    }
    return (
        <>
            {
                task ? <Grid className={classes.container}>
                    {List.map((item) => (
                        <    Grid className={classes.list} onClick={() => setTask(false)} >
                            <Typography className={classes.name} > {item}</Typography>
                        </Grid>
                    ))}
                </Grid>
                    :
                    <Button variant="outlined" className={classes.btn} onClick={taskList} > Task List</Button>
            }
        </>
    )
}
