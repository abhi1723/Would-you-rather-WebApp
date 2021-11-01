import { _saveQuestionAnswer } from "../utils/_DATA";
export const SAVE_ANSWER_USER ="SAVE_ANSWER_USER";
export const SAVE_ANSWER_QUESTION="SAVE_ANSWER_QUESTION";

function saveAnswerUserActionCreator(answer){
    return{
        "type": SAVE_ANSWER_USER,
        answer
    }
}

function saveAnswerQuestionActionCreator(answer){
    return{
        "type": SAVE_ANSWER_QUESTION,
        answer
    }
}
// function setAuthedUser()
export const saveAnswer=(questionId,answer)=>{
    return( dispatch, getState) =>{
        const authedUser = getState().authedUser;
        return _saveQuestionAnswer({"authedUser":authedUser.id,"qid":questionId,answer})
                .then(()=>{
                    //dispatch changes to user reducer
                    dispatch(saveAnswerUserActionCreator({"authedUser":authedUser.id,"qid":questionId,answer}));
                    // dispatch changes to question reducer
                    dispatch(saveAnswerQuestionActionCreator({"authedUser":authedUser.id,"qid":questionId,answer}));
                    //  dispatch changes to authedUser reducer
                    // dispatch(setAuthedUser())
                }).catch(err=>{
                    console.log("Error in saveAnswer thunks : ",err);
                })
    }
}