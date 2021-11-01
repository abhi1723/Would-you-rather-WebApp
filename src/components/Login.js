import * as React from 'react';
import Box from '@mui/material/Box';
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import "../index.css"
import { withRouter } from "react-router";

function Login(props) {
    const { userNames,users, dispatch } = props;
    const [loggedInUser,setLoggedUser] = React.useState('');
    const setLoggedInUser = (event) =>{
        let userName = event.target.value;
        console.log("user selected for sign in : ",users[userName]);
        setLoggedUser(userName);
        dispatch(setAuthedUser(users[userName]));
        props.history.push('/questions');
    }
    return (
        <Grid container spacing={2} className="container">
             <Grid item xs={4}></Grid>
             <Grid item xs={4}>
             <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Log in</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={loggedInUser}
          label="Login"
          onChange={setLoggedInUser}
        >
             {userNames.map((userName) => {
                return <MenuItem key={userName} value={userName}>{userName}</MenuItem>
            })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
    </Grid>
    <Grid item xs={4}></Grid>
       </Grid>    
       
    )
}
function mapStateToProps({ users }) {
    return {
        userNames: Object.keys(users),
        users: users
    }
}
export default withRouter(connect(mapStateToProps)(Login));
