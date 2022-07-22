import { Grid, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import AddTask from './AddTask';


const useStyles = makeStyles(()=>({
  container : {
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    height : "500px",
    width : "500px",
    backgroundColor : "green",
gap : "20px"

  },
time : {
fontSize:"50px",

},
btn:{
  display : "flex",
  gap : "20px"
}
}))
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [flag , setFlag]=useState(false)
  const [item , setItem]=useState(true)

  function start() {
    setIsActive(true);
  }
  function pause() {
    setIsActive(false);
  }
  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        if(seconds==59){
          setSeconds(0)
          setMinutes(minutes=>minutes+1)
        }
        else if(minutes==59){
          setMinutes(0)
          setHours(hours=>hours+1)
        }
      }, 1000);
    } 
    return () => clearInterval(interval);
  }, [isActive, seconds]);
const classes =useStyles()
const onClick=()=>{
  setFlag(true)
  setItem(false)
}
  return (
    <>
   {item && <Grid className={classes.container}>
      <Grid className={classes.time}> 
        {seconds}s {minutes}m {hours}h 
        </Grid>
      <Grid className={classes.btn}>
      <Button variant="contained" onClick={start}>Start</Button>
      <Button variant="contained" onClick={pause}>Pause</Button>
      <Button variant="contained" onClick={onClick}>Save</Button>
      </Grid>
    </Grid>}
    {flag &&   <AddTask/>}
    
    </>

    // <div className="app">
    //   <div className="time">
    //     {seconds}s {minutes}s
    //   </div>
    //   <div className="row">
    //     <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
    //       {isActive ? 'Pause' : 'Start'}
    //     </button>
    //     <button className="button" onClick={reset}>
    //       Reset
    //     </button>
    //   </div>
    // </div>
  );
};

export default Timer;