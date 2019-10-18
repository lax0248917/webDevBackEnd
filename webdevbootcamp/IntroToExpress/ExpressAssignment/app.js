var express = require("express");
var app = express();

app.get("/", function(req, res) {
  console.log("Hi there, welcome to my assignment!");
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req,res) {
  var sounds = {
    pig: "oink",
    cow: "moo",
    dog: "Woof Woof",
    cat: "Meow",
    horse: "neigh"
  }
  var animal = req.params.animal.toLowerCase();
  var noise = sounds[animal];
    
  res.send("The " + animal + " says '" + noise + "'");
});

app.get("/repeat/:message/:times", function(req,res) {
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";
    for(var i = 0; i < times; i++) {
      result += message + " ";
    }
  res.send(result);
});

app.get ("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});