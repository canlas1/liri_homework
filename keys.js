var input = process.argv;
console.log(input);

var operator = input[2];

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'GTm2LbGmAOwI0WxRPvQPYYbZk',
  consumer_secret: 'LJbKMPBd6xFsy24ixqEPfH11zBnnAZbSauzPcHVGEcZc0XqISM',
  access_token_key: '852547974655864832-BrVeA1H25Ekqm5TgOmGzAlUCWowcsrd',
  access_token_secret: 'E2O7lGX7NbG2jVxUz2z1Z8JZ7BAXs1SgMzYNOMZ4Nthaz'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// exports.twitterKeys = {
//    consumer_key: 'GTm2LbGmAOwI0WxRPvQPYYbZk',
//    consumer_secret: 'LJbKMPBd6xFsy24ixqEPfH11zBnnAZbSauzPcHVGEcZc0XqISM',
//    access_token_key: '852547974655864832-BrVeA1H25Ekqm5TgOmGzAlUCWowcsrd',
//    access_token_secret: 'E2O7lGX7NbG2jVxUz2z1Z8JZ7BAXs1SgMzYNOMZ4Nthaz',
//  }







