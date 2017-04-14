var stuffINeed = require("./keys.js");
var fs = require("fs");

console.log(fs);
console.log(stuffINeed);

var operator = input[2];

switch (operator) {
  case "my-tweets":
    tweets();
    break;

  case "spotify-this-song":
    spotify();
    break;

  case "movie-this":
    movie();
    break;

  case "do-what-it-says":
    what();
    break;
}


// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";


// Includes the FS package for reading and writing packages
var fs = require("fs");

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
fs.readFile("best_things_ever.txt", "utf8", function(err, data) {

  // Break the string down by comma separation and store the contents into the output array.
  var output = data.split(",");

  // Loop Through the newly created output array
  for (var i = 0; i < output.length; i++) {

    // Print each element (item) of the array/
    console.log(output[i]);
  }

});

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}


// var total = input[2];
// var withdraw = input[3];
// var deposit = input[4];

// console.log(total);
// console.log(withdraw);
// console.log(deposit);

// //The parseFloat() function parses a string and returns a floating point number.

// //This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.

// if(operator === 'add'){
// 	console.log(parseFloat(num1) + parseFloat(num2));

// }

// else if(operator === 'subtract'){
// 	console.log(parseFloat(num1) - parseFloat(num2));

// }

// else if(operator === 'multiply'){
// 	console.log(parseFloat(num1) * parseFloat(num2));
	
// }

// else if(operator === 'divide'){
// 	console.log(parseFloat(num1) / parseFloat(num2));
	
// }

// else if(operator === 'remainder'){
// 	console.log(parseFloat(num1) % parseFloat(num2));
	
// }

// else if(operator === 'exp'){
// 	console.log(parseFloat(num1) ^ parseFloat(num2));
	
// }

// else{
// 	console.log('not found');
// }


















