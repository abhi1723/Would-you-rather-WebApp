export const STORE_POINTS = "STORE_POINTS"; 
export default function pointTable(users){
    return {
        type : STORE_POINTS,
        users
    }
}