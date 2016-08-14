//Commands:
// hi - Hubot responds with 'hi from hubot!'
//@hubot bye - Hubot responds with 'bye bye from hubot!'

//to make code work push it and
//after git push - DO git push heroku master

const https = require('https');

module.exports = function(robot) {
  //when anyone types 'hi' bot will respond
  robot.hear(/hi/i, function(msg) {
    msg.send("hi from hubot!");
  });

  //you have to mention @slackbot and type 'bye'
  robot.respond(/bye/i, function(msg) {
    msg.send("bye bye from hubot!");
  });

  robot.respond(/hello/i, function(msg) {
    msg.send("http://38ccda.medialib.glogster.com/media/650b48a16f03fe794640a00af0b4453a284d0ba0d6cce58e9c599fc5394447a0/big-bend-picture2.jpg");
  });

  robot.respond(/play artist (.*)/i, function(msg) {
    //console.log(msg.match);
    var artist = msg.match[1];
      https.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist', function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            if (parsed.artists.items[0] == undefined) {
              msg.send("Artist not found");
            }
            else {
              msg.send(parsed.artists.items[0].external_urls.spotify);
            }
        });
    });
  });

  robot.respond(/play album (.*)/i, function(msg) {
    var album = msg.match[1];
      https.get('https://api.spotify.com/v1/search?q=' + album + '&type=album', function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
            if (parsed.albums.items[0] == undefined) {
              msg.send("Album not found");
            }
            else {
              msg.send(parsed.albums.items[0].external_urls.spotify);
            }
        });
    });
  });

  robot.respond(/play track (.*)/i, function(msg) {
    var track = msg.match[1];
      https.get('https://api.spotify.com/v1/search?q=' + track + '&type=track', function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
            if (parsed.tracks.items[0] == undefined) {
              msg.send("Track not found");
            }
            else {
              msg.send(parsed.tracks.items[0].external_urls.spotify);
            }
        });
    });
  });

//to look for help: run bin/hubot and then type Mr Bot help

}
