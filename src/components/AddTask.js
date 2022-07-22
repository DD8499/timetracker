import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(()=>({
    container : {
        height : "500px",
    width : "500px",
        backgroundColor : "blue"
    }
}))
export default function AddTask(){
const classes = useStyles()
    return(
        <>
    <Grid className={classes.container}>

  
    </Grid>
    </>

    )
}