//this is for what the datq the user sees and post to our server to store
const path = require("path");
var friendsData = require ("../data/friends");

module.exports = function(app){
    app.get("/survey.html",function(req,res){
        // console.log("survey route");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("/api/friends",function(req,res){
        res.json(friendsData);
        console.log(friendsData);
    });

    app.get("/add", function(request,response){
        console.log("this is the body " + JSON.stringify(request.body));
        var result = request.body["num1"]+request.body["num2"]
        response.send(result.toString());
    })

    app.post("/api/friends", function(req, res){
        console.log("this is the post api/friends");
        //this is where the calculation is going to happen
        
        //get the userQues from the survey.html file
        var userQues = req.body;
        console.log("this is the req.body " + JSON.stringify(req.body));
        //get the friendsGroup from the friends.js file
        //compare index to index between the 2 files
        //above 3 lines would need to be a forloop??

        //the value that matches closest to each other is the new friend
        //in the modal
            //show the friend name
        // var matchFriendName = friendsGroup.name;
        //     //show the friend picture
        // var matchFriendPic = friendsGroup.picture;
        res.send("here's your response");
    })
}