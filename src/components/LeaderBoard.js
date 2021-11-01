import { connect } from "react-redux"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { withRouter } from "react-router";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

  
  function LeaderBoard(props){
    const { pointsTable, authedUser}=props;
    if(Object.keys(authedUser).length===0){
        props.history.push(`/login`);
    }
    function createData(rank, name, points, avatarURL,noOfAnsweredQuestions,noOfQuestionsAsked) {
        return { rank, name, points, avatarURL,noOfAnsweredQuestions,noOfQuestionsAsked};
      }
    
    const rows =pointsTable.map((l,index) =>{
        return createData(index+1,l["name"],l.totalPoints,l["avatarURL"],l["noOfAnsweredQuestions"],l["noOfQuestionsAsked"])
    })
    return (
        <Grid container className="questionCard">
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
       
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">No Of Questions Answered</TableCell>
            <TableCell align="center">No Of Questions Asked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="center"><Stack direction="row" spacing={2}>
                                <Avatar alt="profile pic" src={row.avatarURL} />
                                <span>{row.name}  </span>
                            </Stack></TableCell>
              <TableCell align="center">{row.points}</TableCell>
              <TableCell align="center">{row.noOfAnsweredQuestions}</TableCell>
              <TableCell align="center">{row.noOfQuestionsAsked}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </Grid>
        <Grid item xs={3}>
        </Grid>
       </Grid>
    )
}
function mapStateToProps({ pointsTable,authedUser }){
    return{
        pointsTable,
        authedUser
    }
}
export default withRouter(connect(mapStateToProps)(LeaderBoard))