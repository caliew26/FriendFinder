//this is for what the datq the user sees and post to our server to store
const path = require("path");
var friendsData = require ("../data/friends");

module.exports = function(app){
    app.get("/survey.html",function(req,res){
        console.log("survey route");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("/api/friends",function(req,res){
        res.json(friendsData);
        console.log(friendsData);
    // instructions: This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    });

    app.post("/api/friends", function(req, res){
        //this is where the calculation is going to happen, I'm not sure how this is going to happen
        
        //get the userQues from the survey.html file
        var userQues = req.body;
        //get the friendsGroup from the friends.js file
        //compare index to index between the 2 files
//above 3 lines would need to be a forloop??

        //the value that matches closest to each other is the new friend
        //in the modal1
            //show the friend name
        var matchFriendName = friendsGroup.name;
            //show the friend picture
        var matchFriendPic = friendsGroup.picture;

        for(let i = 0; i < friendsData.length; i++){
            var difference = 0;
            for (let j = 0; j < userQues.length; j++){
                difference += Math.abs(friendsData[i].score[j] - userQues[j])
            }
            console.log(difference);
        }
    })
}