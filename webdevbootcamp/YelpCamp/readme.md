#YelpCamp V1

[x] Add Landing Page
[x] Add Campgrounds Page that lists all Campgrounds

Each Campround has:
[x] Name
[x] Tag

[
  {name: "Salmon Creek", image: "https://www.image.com"}
  {name: "Salmon Creek", image: "https://www.image.com"}
  {name: "Salmon Creek", image: "https://www.image.com"}
]

#Layout and Basic Styling 

[x] Create out header and footer partials
[x] Add in Bootstrap 3

#Creating New Campgrounds

[x] Setup new campground POST route
[x] Add in body-parser
[x] Setup route to show form
[x] Add basic unstyled form

#Style the campgrounds page 

[x] Add a better header/title
[x] Make campgrounds display in a grid

#Style the Navbar and form

[x] Add a navbar to all templates
[x] Style the new campground form


YelpCamp V2

#Add Mongoose
[x] Install and configure Mongoose
[x] Setup campground model
[x] Use campground model inside of our routes!

#Show Page
[x] Review the RESTful routes we've seen so far
[x] Add description to our campground model 
[x] Show db.collection.drop() deletes all information out of the database
[x] Add a show route/template 


YelpCamp V3

#Refactor Mongoose Code 
[x] Create a models directory
[x] Use model.exports
[x] Require everything correctly!

#Add Seeds File
[x] Add a seeds.js file 
[x] Run the seeds file every time the server starts

#Add the Comment Model 
[x] Make our errors go away!
[x] Display comments on campground show page


YelpCamp V4

#Comment New/Create 
[x] Discuss nested routes
[x] Add the comment new and create routes 
[x] Add the new comment form


YelpCamp V5

#Style Show Page
[x] Add sidebar to show page
[x] Display comments nicely

#Finish Styling Show Page 
[x] Add public directory
[x] Add custom stylesheet


YelpCamp V6

#Auth Pt. 1 - Add User Model
[x] Install all packages needed for auth
[x] Define User model 

#Auth Pt. 2 - Register
[x] Configure Passport
[x] Add register routes
[x] Add register template

#Auth Pt. 3 - Login
[x] Add login routes
[x] Add login template 

#Auth Pt. 4 - Logout/Navbar
[x] Add logout route
[x] Prevent user from adding a comment if not signed in
[x] Add links to navbar

#Auth Pt. 5 - Show/Hide Links
[x] Show/hide auth links correctly


YelpCamp V7

#Refactor The Routes!
[x] Use Express router to reorganize all routes


YelpCamp V8

#Users + Comments
[x] Associate users and comments
[x] Save author's name to a comment automatically


YelpCamp V9

#Users + Campgrounds 
[x] Prevent an unauthenticated user from creating a campground
[x] Save username+id to newly created campground


YelpCamp V10

#Editing Campgrounds 
[x] Add Method-Override
[x] Add Edit Route for Campgrounds 
[x] Add Link to Edit Page 
[x] Add Update Route

#Deleting Campgrounds
[x] Add Destroy Route 
[x] Add Delete button

#Authorization Part 1: Campgrounds
[x] User can only edit his/her campgrounds
[x] User can only delete his/her campgrounds 
[x] Hide/Show edit and delete buttons 

#Editing Comments
[x] Add Edit route for comments 
[x] Add Edit button 
[x] Add Update route

#Deleting Comments
[x] Add Destroy route
[x] Add Delete button

#Authorization Part 2: Comments
[x] User can only edit his/her comments
[x] User can only delete his/her comments 
[x] Hide/Show edit and delete comments 
[x] Refactor Middleware



 





RESTful Routes-
name     url        verb    desc.
=====================================
INDEX   /dogs       GET     Displays a list of all dogs
NEW     /dogs/new   GET     Displays form to make a new dog
CREATE  /dogs       POST    Add new dog to DB
SHOW    /dogs/:id   GET     Shows info about one dog

INDEX  /campgrounds
NEW    /campgrounds/new
CREATE /campgrounds
SHOW   /campgrounds/:id

NEW    /campgrounds/:id/comments/new  GET
CREATE /campgrounds/:id/comments  POST 