function myShop(num) {
  var faker = require("faker");
  for(var i = 0; i < num; i++) {
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
  };
};
console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");
myShop(10);


