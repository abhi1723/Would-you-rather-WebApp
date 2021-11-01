import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../actions/authedUser";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "../index.css";
import { withRouter } from "react-router";

const Nav = (props) => {
    const { dispatch, authedUser } = props;
    const logOutUser = () => {
        dispatch(logOut());
    }
    return        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link className="link" to="/leaderboard">LeaderBoard</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link  className="link" to="/add">New Question</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link  className="link" to="/questions">Questions</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {Object.keys(authedUser).length === 0 ?
                            <Link  className="link" to="/login">Login</Link> : <Stack direction="row" spacing={2}>
                                <Avatar alt="profile pic" src={authedUser["avatarURL"]} />
                                <span>{authedUser["name"]} (<Button onClick={logOutUser} color="inherit">Logout</Button>)</span>
                            </Stack>}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    
}
function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
export default withRouter(connect(mapStateToProps)(Nav))