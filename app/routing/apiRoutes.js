// //this is for what the datq the user sees and post to our server to store
// const path = require("path");
// var friendsData = require("../data/friends");
// const request = require('request');

// module.exports = function(app){
//     app.get("/survey.html",function(req,res){
//         // console.log("survey route");
//         res.sendFile(path.join(__dirname, "../public/survey.html"));
//     })

//     app.get("/api/friends",function(req,res){
//         res.json(friendsData);
//         console.log(friendsData);
//     });

//     app.post("/api/friends", function(req, res){
//         // console.log("this is the post api/friends");

//         //get the userQues from the survey.html file
//         var userQues = req.body;
//         // console.log("this is the req.body " + JSON.stringify(req.body));

//         var questionScore = userQues.score;
//         //assign a variable for the userQues so i can make an array of the score
//         console.log("this is the questions.score " + questionScore);

//         //get the friendsGroup from the friends.js file
//         request.get('http://localhost:8080/data', function (error, response, body) {
//             if (error) throw error;
//             json = JSON.parse(body);
//             console.log(body);
//             var bestFriendSoFar;
//             var lowestScore = 100000000000;
//             //=> means "function"
//             json.forEach(possibleFriend => {
//                 console.log(possibleFriend["name"]);
//                 var totalScore = 0;
//                 for(let i = 0; i < possibleFriend["score"].length; i++){
//                    totalScore += Math.abs(possibleFriend["score"][i] - questionScore[i]);
//                 }
//                 console.log(totalScore);
//                 if (totalScore < lowestScore){
//                     bestFriendSoFar = possibleFriend;
//                     lowestScore = totalScore;
//                     console.log('Your New Possible Friend is ' + bestFriendSoFar["name"]);
//                 }
//             });
//             // console.log(body);
//             res.send(bestFriendSoFar);
//           });
//     })
// }

//this is for what the datq the user sees and post to our server to store
const path = require("path");
var friendsData = require("../data/friends");
const request = require('request');

module.exports = function(app){
    app.get("/survey.html",function(req,res){
        // console.log("survey route");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("/api/friends",function(req,res){
        res.json(friendsData);
        console.log(friendsData);
    });

    app.post("/api/friends", function(req, res){
        // console.log("this is the post api/friends");

        //get the userQues from the survey.html file
        var userQues = req.body;
        // console.log("this is the req.body " + JSON.stringify(req.body));

        var questionScore = userQues.score;
        //assign a variable for the userQues so i can make an array of the score
        console.log("this is the questions.score " + questionScore);

        //get the friendsGroup from the friends.js file

        var bestFriendSoFar;
        var lowestScore = 100000000000;
        //=> means "function"
        friendsData.forEach(possibleFriend => {
            console.log(possibleFriend["name"]);
            var totalScore = 0;
            for(let i = 0; i < possibleFriend["score"].length; i++){
                totalScore += Math.abs(possibleFriend["score"][i] - questionScore[i]);
            }
            console.log(totalScore);
            if (totalScore < lowestScore){
                bestFriendSoFar = possibleFriend;
                lowestScore = totalScore;
                console.log('Your New Possible Friend is ' + bestFriendSoFar["name"]);
            }
        });
        // console.log(body);
        res.send(bestFriendSoFar);
        });
}