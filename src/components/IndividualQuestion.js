import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { connect } from "react-redux"
import { saveAnswer } from "../actions/shared";
import "../index.css";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { withRouter } from "react-router";

  
function IndividualQuestion(props){
    const { questions,id,authedUser,dispatch, users} = props;
    if(Object.keys(authedUser).length===0){
        props.history.push(`/login`);
    }
    console.log("id ",id);
    console.log("id  length",id.length);
    if( questions[id]===undefined){
        // console.log("")
        props.history.push(`/pageNotFound`);
    }
   
    const storeAnswer =(id,answer)=> {
        dispatch(saveAnswer(id,answer));
    }
    return (
        <Grid container spacing={2} className="questionCard">
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
            {Object.keys(authedUser).length>0 && Object.keys(questions).length>0 && 
                <span>
                    { !Object.keys(authedUser["answers"]).includes(id) ? 
                     <Card key={id} sx={{ minWidth: 275 }}>
                     <CardContent>
                       <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                       <Stack direction="row" spacing={2}>
                                <Avatar alt="profile pic" src={users[questions[id].author]["avatarURL"]} />
                                <span>{users[questions[id].author]["name"]}  </span>
                            </Stack></Typography>
                       <Typography variant="h5" component="div">
                       Would you rather...
                       </Typography>
                       <Typography onClick={()=>storeAnswer(id,"optionOne")} sx={{ mb: 1.5 }} color="text.secondary">
                       {questions[id].optionOne.text}
                       </Typography>  

                       <Typography onClick={()=>storeAnswer(id,"optionTwo")} sx={{ mb: 1.5 }} color="text.secondary">
                       {questions[id].optionTwo.text}
                                                 
                       </Typography>
                     </CardContent>
                    
                   </Card>:
                    <Card key={id} className="cardDetail" sx={{ minWidth: 675 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar alt="profile pic" src={users[questions[id].author]["avatarURL"]} />
                                        <span>{users[questions[id].author]["name"]}  </span>
                                    </Stack></Typography>
                                <Typography variant="h5" component="div">
                                    Would you rather...
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                No of people voting for OptionOne {questions[id].optionOne.text}     
                     : {questions[id].optionOne.votes.length}({(questions[id].optionOne.votes.length/(questions[id].optionOne.votes.length+questions[id].optionTwo.votes.length))*100} %)
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                No of people voting for OptionTwo {questions[id].optionTwo.text} 
                     : {questions[id].optionTwo.votes.length}({(questions[id].optionTwo.votes.length/(questions[id].optionOne.votes.length+questions[id].optionTwo.votes.length))*100} %)
                   
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Your Answer was : {authedUser["answers"][id]}
                                </Typography>
                            </CardContent>
                       
                    </Card>
                   
                }
                </span>
                }
        </Grid>
        <Grid item xs={3}></Grid>
        </Grid>
    )
}
function mapStateToProps({ questions, authedUser, users },props){
    // const questionIds = Object.keys(questions);
    const { id } = props.match.params
    // if(Object.keys(authedUser).length>0){

    // }
    // const { } = 
    console.log("questions : ",questions);
    return{
        questions,
        id,
        authedUser,
        users
        // isAuthUserUndefined : Object.keys(authedUser).length==0 ? true : false
    }
}

export default withRouter(connect(mapStateToProps)(IndividualQuestion))