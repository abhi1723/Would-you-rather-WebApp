import { FETCH_ALL_USERS } from "../actions/users";
import { SAVE_ANSWER_USER } from "../actions/shared";
import { SAVE_NEW_QUESTION_TO_USER } from "../actions/questions";
export default function users(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return action.users
        case SAVE_ANSWER_USER:
            const {authedUser, qid, answer} = action.answer;
            return {
                ...state,
                [authedUser] : {
                    ...state[authedUser],
                    answers:{
                        ...state[authedUser]["answers"],
                        [qid] : answer
                    }
                }
            }
        case SAVE_NEW_QUESTION_TO_USER:
            console.log("action.newQuesDetail : ",action.newQuesDetail);
            const { author,newQuesId } = action.newQuesDetail;
            return{
                ...state,
                [author] :{
                    ...state[author],
                    questions: state[author].questions.concat([newQuesId])
                }
            }
        default:
            return state;
    }
}
