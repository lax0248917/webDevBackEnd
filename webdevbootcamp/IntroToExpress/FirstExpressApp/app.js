var express = require("express");
var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res) {
  res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
  res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
  console.log("SOMEONE MADE A REQUEST TO /DOG!!");
  res.send("MEOW!");
});

//Route parameters
app.get("/r/:subredditName", function(req,res) {
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
})

//Undefined Route that will show an error message
app.get ("*", function(req, res) {
  res.send("You are a star!");
})
// Tell Express to listen for requests (start server)

app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});