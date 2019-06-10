//this is for what the datq the user sees and post to our server to store
var path = require("path");

module.exports = function(app){
    app.get("/survey.html",function(req,res){
        console.log("survey route");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.post("/api/friends",function(req,res){
        console.log("api/friends");
    // instructions: This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    });
}