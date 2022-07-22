import * as React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Grid, Typography } from '@material-ui/core'
import TaskList from './TaskList'
import Timer from './Timer'

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: "#EFEFEF"
    },
    root: {
        display: "flex",
        flexDirection: 'column',
        height: '90vh',
        width: '90vw',
        backgroundColor: "White",
        border: '1px solid black'
    },
    task: {
        display: "flex",
        justifyContent: 'right',
        alignItems: 'center',
        height: '10vh',
        marginRight: "40px"
    },
    clock: {
        display: "flex",
        justifyContent:"center",
        alignItems: 'center',
        height: '80vh',
        backgroundColor: "red",
    }
}))

export default function TimeTracker() {
    const classes = useStyles()
    const [hours, setHours] = React.useState("05")
    const [minutes, setMinutes] = React.useState("05")
    const [seconds, setSeconds] = React.useState("05")
    return (
        <>
            <Grid className={classes.container}>
                <Grid className={classes.root}>
                    <Grid className={classes.task}>
                        <TaskList />
                    </Grid>
                    <Grid className={classes.clock}>
                           <Timer/>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )

}