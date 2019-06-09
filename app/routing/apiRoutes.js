app.get("/survey",function(req,res){
    console.log("survey route");
    res.sendFile(path.join(__dirname, "survey.html"));
})

app.post("/api/friends",function(req,res){
    console.log("api/friends");
    var newfriend = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newfriend);
  
    friends.push(newfriend);
  
    res.json(newfriend);
});