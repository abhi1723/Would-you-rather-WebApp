import { setAuthedUser } from "../actions/authedUser";
import { SAVE_ANSWER_USER } from "../actions/shared";
const logger = (store) =>(next) => (action) =>{
    console.group(action.type);
        console.log("Old State :", store.getState());
        const result = next(action);
        if(action.type===SAVE_ANSWER_USER){
            store.dispatch(setAuthedUser(store.getState().users[action.answer.authedUser]))
        }
            
        console.log("new State : ",store.getState());
    console.groupEnd();
    return result;
}
export default logger;