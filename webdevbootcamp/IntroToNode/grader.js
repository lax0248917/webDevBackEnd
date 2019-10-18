function average(arr) {
  var sum = 0;
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = (sum / arr.length); 
  var total = Math.round(avg);
  console.log(total); 
};

var scores = [90, 98, 89, 100, 100, 86, 94];

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

average(scores);
average(scores2);