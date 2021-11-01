export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";
export const LOG_OUT="LOG_OUT";
export function setAuthedUser(user){
    return{
        "type" : SET_LOGGED_IN_USER,
        user
    }
}
 export function logOut(){
     return{
         type : LOG_OUT,
         user : {}
     }
 }