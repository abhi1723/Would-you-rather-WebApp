import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { connect } from "react-redux";
import AnsweredQuestions from "./AnsweredQuestions";
import UnansweredQuestions from "./UnansweredQuestions";
import { withRouter } from "react-router";

import "../index.css";
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function Questions(props){
    const { questionIds,authedUser, questions} = props;
    const answeredQuestionIds = authedUser && authedUser.answers  ? Object.keys(authedUser.answers).sort((qid1,qid2)=> questions[qid2].timestamp-questions[qid1].timestamp): [];
    const notAnsweredQuestionIds = questionIds.filter(questionId => !answeredQuestionIds.includes(questionId)).sort((qid1,qid2)=> questions[qid2].timestamp-questions[qid1].timestamp);
    
    if(Object.keys(authedUser).length===0){
        props.history.push(`/login`);
    }
   
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return(
        <Grid container spacing={2} className="questionCard">
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={5}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Unanswered" {...a11yProps(0)} />
    <Tab label="Answered" {...a11yProps(1)} />
   
  </Tabs>
</Box>
</Grid>
<Grid item xs={3}>
        </Grid>
        
<TabPanel value={value} index={0}>
<UnansweredQuestions questionIds={notAnsweredQuestionIds}/>
</TabPanel>
<TabPanel value={value} index={1}>
<AnsweredQuestions questionIds={answeredQuestionIds}/>
</TabPanel>
        </Grid>
    )
}
function mapStateToProps({ questions, authedUser }){
    return{
        questionIds: Object.keys(questions),
        authedUser,
        questions
    }
}
export default withRouter(connect(mapStateToProps)(Questions))