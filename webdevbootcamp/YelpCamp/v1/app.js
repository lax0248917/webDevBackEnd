var express = require("express");
var app = express();
var bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image:"https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nelsonkootenaylake.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2FPlacestoStay%2FCAMPING-400.jpg&f=1&nofb=1"},
  {name: "Granite Hill", image:"https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fkardsunlimited.com%2Fwp-content%2Fuploads%2F2013%2F06%2Ffire.jpg&f=1&nofb=1"},
  {name: "Mountain Goat's Rest", image:"https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nps.gov%2Fzion%2Fplanyourvisit%2Fimages%2FWatchmanCG_Watchman_r.jpg&f=1&nofb=1"}
];

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function (req, res) {
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image =req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
  res.render("new.ejs");
});




app.listen(3000, function() {
  console.log("The YelpCamp Server listening on port 3000");
});