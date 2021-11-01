import { _getQuestions } from "../utils/_DATA";
import { _saveQuestion } from "../utils/_DATA";
export const FETCH_ALL_QUESTIONS = "FETCH_ALL_QUESTIONS";
export const SAVE_NEW_QUESTION="SAVE_NEW_QUESTION";
export const SAVE_NEW_QUESTION_TO_USER="SAVE_NEW_QUESTION_TO_USER";
function fetchQuestions(questions){
    return{
        "type": FETCH_ALL_QUESTIONS,
        questions
    }
}
function saveNewQuestion(newQuestion){
    return{
        type : SAVE_NEW_QUESTION,
        newQuestion
    }
}
function saveQuestionToUser(newQuesDetail){
    console.log("newQuesDetail action creator",newQuesDetail);
    return{
        type : SAVE_NEW_QUESTION_TO_USER,
        newQuesDetail
    }
}
export const retrieveQuestions = () =>{
    return ((dispatch) =>{
        return _getQuestions().then((questions)=>{
            console.log("questions",questions);
            dispatch(fetchQuestions(questions))
        }).catch(err => {
            console.log("Error in thunks retrieveQuestions : ",err);
        })
    })
}

export const storeNewQuestion =({optionOneText,optionTwoText}) =>{
    return ((dispatch, getState) =>{
        const author = getState().authedUser.id;
        // console.log(" getState().authedUser", getState().authedUser);
        // console.log("getState().authedUser.id",getState().authedUser.id);
        return _saveQuestion({author,optionOneText,optionTwoText}).then((newQuestion)=>{
            console.log("newQuestion",newQuestion);
            dispatch(saveNewQuestion(newQuestion));
            const newQuesId= newQuestion["id"];
            // const obj = {author,newQuesId};
            dispatch(saveQuestionToUser({author,newQuesId}));
        })
    })
}