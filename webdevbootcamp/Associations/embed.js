var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useNewUrlParser: true});

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//   email: "hermoine@hogwarts.edu",
//   name: "Hermoine Granger"
// });

// newUser.posts.push({
//   title: "How to brew ployjuice potion",
//   content: "Just kidding, go to potions class to learn it!"
// });

// newUser.save(function (err, user) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "Reflection on Apples",
//   content: "They are delicious"
// });

// newPost.save(function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post)
//   }
// });

User.findOne({name: "Hermoine Granger"}, function (err, user) {
  if(err) {
    // console.log(err);
  } else {
    user.posts.push({
      title: "Three things I really hate",
      content: "Voldemort. Voldermort. Voldermort"
    });
    user.save(function (err, user) {
      if(err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});