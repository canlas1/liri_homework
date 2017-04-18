//*******KEYS*************
var twitterKeys = require("./keys.js");

//*******Packages i need to install*******
var spotify = require('spotify');
var Twitter = require('Twitter');
var fs = require('fs');
var inquirer = require('inquirer');
var request = require("request");


// Make it so liri.js can take in one of the following commands:
var userTweets = `my-tweets`;
var userSpotify = `spotify-this-song`;
var userMovie = 'movie-this';
var userDoWhat = 'do-what-it-says';

// The first will be the action (i.e. "my-tweets", "spotify-this-song", etc
// The second will be the value after the command ie movie name or song name
var nodeArg = process.argv;
var userChoice = process.argv[2];
var value = process.argv[3];
var userName;


// =======================================================================
// GLOBAL FUNCTIONS
function displayUserTweets() {

    //grabbed from npm
    var client = new Twitter(twitterKeys);

    var params = { screen_name: 'dcanlas1980' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            // console.log(tweets);

            for (var i = 0; i < userTweets.length; i++) {
                console.log("=================================================================");
                console.log("THIS TWEET WAS CREATED ON:  " + tweets[i].created_at);
                console.log("=================================================================");
                console.log("TEXT OF THE LAST TWEET:  " + tweets[i].text);
            }
        }
    });
}
//#############################
function spotifySearchSong() {
    //for loop to make sure the value is blank go to "The Sign" or multiple words then define logic 
    for (var i = 2; i < nodeArg.length; i++) {
        if (i < 3) {
            value = "The" + "+" + "Sign";
        } else if (i > 3 && i < nodeArg.length) {
            value = value + "+" + nodeArg[i];
        } else {
            value = nodeArg[3];
        }
    }
    //grabbed from npm changed set query to value
    spotify.search({ type: 'track', query: value }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;

        }

        var spotifyData = data.tracks.items;
        for (i in spotifyData) {
            console.log("=================================================================");
            console.log("Artist involved:   " + spotifyData[i].artists[0].name);
            console.log("=================================================================");
            console.log("Album Name:        " + spotifyData[i].album.name);
            console.log("=================================================================");
            console.log("Song Name:         " + value);
            console.log("=================================================================");
            console.log("External_urls:     " + spotifyData[i].album.external_urls.spotify);
            console.log("=================================================================");
        }
    });
}
//#############################

function movieInformationDisplay() {

    //loop to make sure the value is blank go to "Mr.Nobody" or multiple words then define logic 
    for (var i = 2; i < nodeArg.length; i++) {
        if (i < 3) {
            value = "Mr" + "+" + "Nobody";
        } else if (i > 3 && i < nodeArg.length) {
            value = value + "+" + nodeArg[i];
        } else {
            value = nodeArg[3];
        }
    }
    //built my request by parameters and concatinating the URL
    var queryUrl = "http://www.omdbapi.com/?t=" + value + "&tomatoes=true&y=&plot=short&r=json";
    console.log(queryUrl);

    var movieRequest = request(queryUrl, function(error, response, body) {

        // If there were no errors and the response code was 200 (i.e. the request was successful)...
        if (!error && response.statusCode === 200) {

            console.log("=================================================================");
            console.log("THIS IS THE MOVIE TITLE: " + JSON.parse(body).Title);
            console.log("=================================================================");

            console.log("THIS IS THE MOVIE YEAR: " + JSON.parse(body).Year);
            console.log("=================================================================");

            console.log("IMDB Rating of the movie " + JSON.parse(body).imdbRating);
            console.log("=================================================================");

            console.log("THIS IS THE County of production " + JSON.parse(body).Country);
            console.log("=================================================================");

            console.log("THIS IS THE Language of the movie.: " + JSON.parse(body).Language);
            console.log("=================================================================");

            console.log("THIS IS THE PLOT of the movie.: " + JSON.parse(body).Plot);
            console.log("=================================================================");

            console.log("THIS IS THE Actors in the movie: " + JSON.parse(body).Actors);
            console.log("=================================================================");

            console.log("THIS IS THE Rotten Tomatoes Rating.: " + JSON.parse(body).tomatoRating);
            console.log("=================================================================");

            console.log("THIS IS THE Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
            console.log("=================================================================");

        };
    });
}
//* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//* Feel free to change the text in that document to test out the feature for other commands.
//#############################
function doWhat() {



    fs.readFile("random.txt", "utf8", function(error, data) {
        console.log(data);

        var dataArray = data.split(',');
        console.log("THIS IS DATA ARRAY:  " + dataArray);
        nodeArg = dataArray[0];
        value = dataArray[1];
        console.log("THIS IS MY VALUE: " + value);
        
        //grabbed from npm changed set query to value
        spotify.search({ type: 'track', query: value }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;

            }

            var spotifyData = data.tracks.items;
            for (i in spotifyData) {
                console.log("=================================================================");
                console.log("Artist involved:   " + spotifyData[i].artists[0].name);
                console.log("=================================================================");
                console.log("Album Name:        " + spotifyData[i].album.name);
                console.log("=================================================================");
                console.log("Song Name:         " + value);
                console.log("=================================================================");
                console.log("External_urls:     " + spotifyData[i].album.external_urls.spotify);
                console.log("=================================================================");
            }
        });
    });
};


//#############################
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

// // Created a series of questions
// inquirer.prompt([

//   {
//     type: "list",
//     name: "action",
//     message: "Enter a user command",
//     choices: [`my-tweets`, `spotify-this-song`, 'movie-this', 'do-what-it-says']
//   },
// ]).then(function(user) {


//   // If the user guesses the password...
//   if (user.action === choices[0]) {
//     function displayUserTweets()
//   }
// }
