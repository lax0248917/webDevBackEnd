var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware")

//Index Route
router.get("/", function (req, res) {
  //get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if(err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds: allCampgrounds});
    }
  });
});

//Create Route
router.post("/", middleware.isLoggedIn, function (req, res) {
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newCampground = {name: name, image: image, description: desc, author: author}
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

//New Route
router.get("/new", middleware.isLoggedIn, function (req, res) {
  res.render("campgrounds/new.ejs");
});

//Show Route
router.get("/:id", function(req, res) {
  //find campground with provided id
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
    if(err) {
      console.log(err);
    } else {
      console.log(foundCampground);
      //render show template with that campground
      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
});

//Edit Campground Route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findById(req.params.id, function (err, foundCampground) {
      res.render("campgrounds/edit", {campground: foundCampground});
    });
});
//Update Campground Route
router.put("/:id", middleware.checkCampgroundOwnership, function (req, res) {
  //find and update the correct campground
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
    if(err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

//Destroy Campground Route
router.delete("/:id", middleware.checkCampgroundOwnership, function (req, res) {
  Campground.findByIdAndRemove(req.params.id, function (err) {
    if(err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds");
    }
  });
});


module.exports = router;