//*******KEYS*************
var twitterKeys = require("./keys.js");
// Load the fs package to read and write
var fs = require('fs');
var inquirer = require('inquirer');
//*******Packages i need to install*******
var spotify = require('spotify');
var Twitter = require('Twitter')
var omdb = require('omdb');

// console.log(inquirer);
console.log(twitterKeys);

// console.log(process.argv);

// Global variables
var userName;

// Make it so liri.js can take in one of the following commands:

var userTweets = `my-tweets`;
var userSpotify = `spotify-this-song`;
var userMovie = 'movie-this';
var userDoWhat = 'do-what-it-says';

// =======================================================================
// GLOBAL FUNCTIONS
function displayUserTweets() {
    var client = new Twitter(twitterKeys);

    var params = { screen_name: 'dcanlas1980' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);

            for (var i = 0; i < 3; i++) {
                console.log(tweets[i].text);

            }
        }
    });



}

function spotifySearchSong() {

	// ASK FOR SONG
    inquirer.prompt([ /* Pass your questions in here */ ])

    // THEN SPIT OUT THE NAME OF THE SONG
    .then(function(answers) {
        // Use user feedback for... whatever!! 


       var query = answers.song;


       // LOOK UP REQUEST SONG
       spotify.search({ type: 'track', query: query }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;




        }
        var spotifyData = data.tracks.items
            // console.log(data);
        for (i in spotifyData) {
            console.log(spotifyData[i].album.name);
            console.log(spotifyData[i].album.name.artists.external_urls);
            // console.log(spotifyData[i].album.name);

            // console.log(data.tracks.items[i].album.artists.name);
            // console.log(data.tracks.items[i].album.artists.external_urls);
        }
        // Do something with 'data' 
    });
    });
    
}

function movieInformationDisplay() {

    // body...
}

function doWhat() {

    // body...
}
// =======================================================================


// Testing Inquirer
inquirer.prompt([{
    type: "input",
    message: "what is your name?",
    name: "name"
}, {
    //type is type of question goes by the inquirer docs

    type: "list",
    //name is the data that user gets back
    choices: [userTweets, 'spotify-this-song', 'movie-this', 'do-what-it-says'],

    name: "testInput",
    message: "How's your day going?"
}]).then(function(answers) {
    console.log("Hello " + answers.name + ", I hope you're having a great day")
        //making this a local variable because it may consitanly change ####SCOPE####
    var userChoice = answers.testInput;
    console.log(userChoice);
    // Use user feedback for... whatever!! 
    switch (userChoice) {
        case "my-tweets":
            displayUserTweets();
            break;

        case "spotify-this-song":
            spotifySearchSong();
            break;

        case "movie-this":
            movieInformationDisplay();
            break;

        case "do-what-it-says":
            doWhat();
            break;
    }
});





// // If the "tweets" function is called...
// function tweets() {

//   // // We will read the existing tweet file
//   // fs.readFile("random.txt", "utf8", function(err, data) {

//   //   // Break down all the numbers inside
//   //   data = data.split(", ");
//   //   var result = 0;

//   //   // Loop through those numbers and add them together to get a sum.
//   //   for (var i = 0; i < data.length; i++) {
//   //     if (parseFloat(data[i])) {
//   //       result += parseFloat(data[i]);
//   //     }
//   //   }

//   //   // We will then print the final balance rounded to two decimal places.
//   //   console.log("You have a total of " + result.toFixed(2));
//   // });
// }


// // If the "Spotify" function is called...
// function spotify() {

//   // // We will add the value to the bank file.
//   // fs.appendFile("bank.txt", ", " + value, (err, value) => {
//   //   console.log("Deposited " + value + ".");

//   // });

//   // We will then print the value that was added (but we wont print the total).
// }

// // If the "movie" function is called
// function movie() {

//   // // We will add a negative value to the bank file.
//   // fs.appendFile("random.txt", ", -" + value);

//   // // We will then print the value that was subtracted (but we wont print the total).
//   // console.log("Movie " + value + ".");
// }

// function movie() {

//   // // We will add a negative value to the bank file.
//   // fs.appendFile("random.txt", ", -" + value);

//   // // We will then print the value that was subtracted (but we wont print the total).
//   // co
// }








// // Store all of the arguments in an array
// var nodeArgs = process.argv;

// // Create an empty variable for holding the movie name
// var movieName = "";


// // Includes the FS package for reading and writing packages
// var fs = require("fs");

// // Running the readFile module that's inside of fs.
// // Stores the read information into the variable "data"
// fs.readFile("best_things_ever.txt", "utf8", function(err, data) {

//   // Break the string down by comma separation and store the contents into the output array.
//   var output = data.split(",");

//   // Loop Through the newly created output array
//   for (var i = 0; i < output.length; i++) {

//     // Print each element (item) of the array/
//     console.log(output[i]);
//   }

// });

// // Loop through all the words in the node argument
// // And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {

//     movieName = movieName + "+" + nodeArgs[i];

//   }

//   else {

//     movieName += nodeArgs[i];

//   }
// }


// // var total = input[2];
// // var withdraw = input[3];
// // var deposit = input[4];

// // console.log(total);
// // console.log(withdraw);
// // console.log(deposit);

// // //The parseFloat() function parses a string and returns a floating point number.

// // //This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.

// // if(operator === 'add'){
// // 	console.log(parseFloat(num1) + parseFloat(num2));

// // }

// // else if(operator === 'subtract'){
// // 	console.log(parseFloat(num1) - parseFloat(num2));

// // }

// // else if(operator === 'multiply'){
// // 	console.log(parseFloat(num1) * parseFloat(num2));

// // }

// // else if(operator === 'divide'){
// // 	console.log(parseFloat(num1) / parseFloat(num2));

// // }

// // else if(operator === 'remainder'){
// // 	console.log(parseFloat(num1) % parseFloat(num2));

// // }

// // else if(operator === 'exp'){
// // 	console.log(parseFloat(num1) ^ parseFloat(num2));

// // }

// // else{
// // 	console.log('not found');
// // }
