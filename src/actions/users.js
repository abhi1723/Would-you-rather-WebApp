import { _getUsers } from "../utils/_DATA";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
function fetchUsers(users){
    return{
        "type": FETCH_ALL_USERS,
        users
    }
}
export const retrieveUsers = () =>{
    return ((dispatch) =>{
        return _getUsers().then((users)=>{
            dispatch(fetchUsers(users))
        }).catch(err => {
            console.log("Error in thunks retrieveUsers : ",err);
        })
    })
}
