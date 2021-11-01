import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { connect } from "react-redux"
import "../index.css";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { withRouter } from "react-router";

function UnansweredQuestions(props) {
    const { questions, questionIds, users } = props;
    return (
        <Grid container className="questionCard">
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6}>
        
            {questionIds.map(questionId => {
                return (
                    <Card key={questionId} className="cardDetail" sx={{ minWidth: 675 }}>
                        <Link to={`/individualQuestion/${questionId}`} className="unAnsweredQuestion" key={questionId}>
                            <CardContent>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar alt="profile pic" src={users[questions[questionId].author]["avatarURL"]} />
                                        <span>{users[questions[questionId].author]["name"]}  </span>
                                    </Stack></Typography>
                                <Typography variant="h5" component="div">
                                    Would you rather...
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {questions[questionId].optionOne.text}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {questions[questionId].optionTwo.text}
                                </Typography>
                            </CardContent>
                        </Link>

                    </Card>
                )
            })}
        </Grid>
{/* <Grid item xs={3}>
        </Grid> */}

        </Grid>
    )
}
function mapStateToProps({ questions, authedUser, users }, { questionIds }) {
    // const questionIds = Object.keys(questions);
    return {
        questions,
        questionIds,
        users
    }
}

export default withRouter(connect(mapStateToProps)(UnansweredQuestions))