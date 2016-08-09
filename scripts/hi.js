//Commands:
// hi - Hubot responds with 'hi from hubot!'
//@hubot bye - Hubot responds with 'bye bye from hubot!'

//after git push - DO git push heroku master

const https = require('https');

module.exports = function(robot) {
  //when anyone types 'hi' bot will respong
  robot.hear(/hi/i, function(msg) {
    msg.send("hi from hubot!");
  });

  //when people mention @slackbot and type bye, only then he will respond
  robot.respond(/bye/i, function(msg) {
    msg.send("bye bye from hubot!");
  });

  robot.respond(/hello/i, function(msg) {
    msg.send("http://38ccda.medialib.glogster.com/media/650b48a16f03fe794640a00af0b4453a284d0ba0d6cce58e9c599fc5394447a0/big-bend-picture2.jpg");
  });

  robot.respond(/nirvana/i, function(msg) {
    https.get('https://api.spotify.com/v1/search?q=nirvana&type=artist', function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            msg.send(parsed.artists.items[0].external_urls.spotify);
        });
    });
  });

//to look for help: run bin/hubot and then type Mr Bot help

}
