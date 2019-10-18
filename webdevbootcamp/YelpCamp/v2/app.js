var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Granite Hill", 
//     image:"https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fkardsunlimited.com%2Fwp-content%2Fuploads%2F2013%2F06%2Ffire.jpg&f=1&nofb=1",
//     description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!!"
//   }, function(err, campground) {
//     if(err) {
//       console.log("YOU HAVE AN ERROR!!!");
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMPGROUND: ");
//       console.log(campground);
//     }
//   });

app.get("/", function (req, res) {
  res.render("landing");
});

//INDEX- show all campgrounds
app.get("/campgrounds", function (req, res) {
  //get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if(err) {
      console.log(err);
    } else {
      res.render("index", {campgrounds: allCampgrounds});
    }
  });
});

//CREATE - add new campground to DB
app.post("/campgrounds", function (req, res) {
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc}
  //create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if(err) {
      console.log(err);
    } else {
      //redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  });
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function (req, res) {
  res.render("new.ejs");
});

//SHOW - show more information about campground
app.get("/campgrounds/:id", function(req, res) {
  //find campground with provided id
  Campground.findById(req.params.id, function(err, foundCampground) {
    if(err) {
      console.log(err);
    } else {
      //render show template with that campground
      res.render("show", {campground: foundCampground});
    }
  });
});


app.listen(3000, function() {
  console.log("The YelpCamp Server listening on port 3000");
});