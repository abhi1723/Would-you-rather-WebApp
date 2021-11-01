import { STORE_POINTS } from "../actions/pointsTable";

export default function pointsTable(pointsTable = [], action){
    switch (action.type) {
        case STORE_POINTS:
            const users = action.users;
            const userIds = Object.keys(users);
            let leaderboard = [];
            if (userIds.length > 0) {
                userIds.map(userId => {
                    let noOfAnsweredQuestions = Object.keys(users[userId]["answers"]).length;
                    let noOfQuestionsAsked = users[userId]["questions"].length;
                    let totalPoints = noOfAnsweredQuestions + noOfQuestionsAsked;
                    let rankingBoard = { userId, totalPoints };
                    leaderboard.push(rankingBoard);
                })
                console.log("leaderboard Leaderboard ", leaderboard);
                leaderboard= leaderboard.sort((a, b) => b["totalPoints"] - a["totalPoints"]);
            }
            return leaderboard;
        default:
            return pointsTable
    }
}