//this is for the user, when they click on a link it will know what page to deliver

var path = require ("path");

module.exports = function(app){
    //this is the "home" page - the user will be directed here when / is called
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
        // res.send("You got this!")
    })

    //this is the "survey" page - the user will be directed to the survey page when the /survey is called
    app.get("/survey.html",function(req,res){
        // console.log("survey route");
        res.sendFile(path.join(__dirname, "../pubic/survey.html"));
    })

    app.get("/data", function(req,res){
        // console.log(res + " this is res");
        // console.log(req + "this is req");
        res.sendFile(path.join(__dirname, "../data/friends.json"))
        // res.send("You got this!")
    })
}
