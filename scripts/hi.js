//Commands:
// hi - Hubot responds with 'hi from hubot!'
//@hubot bye - Hubot responds with 'bye bye from hubot!'

//after git push - DO git push heroku master

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
    msg.send("Hola!");
  });

//to look for help: run bin/hubot and then type Mr Bot help

}
