app.get("/", function(req,res){
    res.send(path.join(__dirname, "../home.html"))
})

app.get("/survey",function(req,res){
    console.log("survey route");
    res.sendFile(path.join(__dirname, "../survey.html"));
})