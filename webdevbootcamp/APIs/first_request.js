// var request = require('request');
// request('http:ww.google.com', function(error, response, body) {
//   if(!error && response.statusCode == 200) {
//     console.log(body) //show the HTML for the Google homepage.
//   }
// })

var request = require('request');

console.log("Current Sunset time is at ...")
request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', function (error, response, body) {
  eval(require('locus'))
  if(!error && response.statusCode == 200){
    var parsedData = JSON.parse(body)
    console.log(parsedData["results"]["sunset"]);
  } 
});