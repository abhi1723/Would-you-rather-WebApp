import React from "react"
import { connect } from "react-redux";
import { storeNewQuestion } from "../actions/questions";
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { withRouter } from "react-router";

function NewQuestion(props){
    const [optionOneText,setOptionOne]= React.useState('');
    const [optionTwoText,setOptionTwo] = React.useState('');
    const { dispatch, authedUser } = props;
    if(Object.keys(authedUser).length===0){
        props.history.push(`/login`);
    }
   
    const saveQuestion = (e) =>{
        e.preventDefault();
        if(optionOneText.length===0 || optionTwoText.length===0){
            alert("One or more form fields are blank")
            return;
        }
        dispatch(storeNewQuestion({optionOneText,optionTwoText}))
        setOptionOne('');
        setOptionTwo('');
        props.history.push(`/questions`)
    }
    return(
        <Grid container className="questionCard">
            <Grid item xs={3}>
        </Grid>
        <Grid item xs={4}>
        Would you Rather : (Add two options)
       
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        
            <form onSubmit={(e)=>saveQuestion(e)}>
            <Grid item xs={5}>
        
            <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Enter option One"     
      value = {optionOneText}
      onChange = {(e)=> setOptionOne(e.target.value)}
      style={{ width: 500 }}
    />     
        </Grid>
        <Grid item xs={5}>
        <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Enter option Two"     
      value = {optionTwoText} 
      onChange = {(e)=> setOptionTwo(e.target.value)}       
    style={{ width: 500 }}
    />    
         
         </Grid>
         <Button onClick={(e)=>saveQuestion(e)} variant="outlined">Submit</Button>
            </form>
       
        <Grid item xs={2}>
        </Grid>
        </Grid>
    )
}
function mapStateToProps({ authedUser }){
    return {
        authedUser : authedUser
    }
}
export default withRouter(connect(mapStateToProps)(NewQuestion))