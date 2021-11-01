import { FETCH_ALL_QUESTIONS } from "../actions/questions";
import { SAVE_ANSWER_QUESTION } from "../actions/shared";
import { SAVE_NEW_QUESTION } from "../actions/questions";
export default function questions(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_QUESTIONS:
            return action.questions
        case SAVE_ANSWER_QUESTION:
            const { qid, answer} = action.answer;
            return{
                ...state,
                [qid]:{
                    ...state[qid],
                    [answer] : {
                        ...state[qid][answer],
                        votes : state[qid][answer].votes.concat([action.answer.authedUser])
                    }
                }
            }
        case SAVE_NEW_QUESTION :
            const  newQuestion  = action.newQuestion;
            return {
                ...state,
                [newQuestion.id] : {
                    ...newQuestion
                }
            }
        default:
            return state;
    }
}
