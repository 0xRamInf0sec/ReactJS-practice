import './App.css';
import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));
export default function App(props) {
const classes=useStyles();
const[value1,setName]=useState("");
const Submit=(evt)=>
{
  evt.preventDefault();
  //alert(value1);
}
  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Practice 2
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    <form onSubmit={Submit} className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" 
      value={value1}
      onChange={e => setName(e.target.value)} />
      
    </form>
    <br></br>
    <div>Entered Value : <b>{value1}</b></div>
    </div>

  );
}
