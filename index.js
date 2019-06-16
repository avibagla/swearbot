/*All the modules!*/
var twilio = require('twilio');
var express = require('express');
var http = require('http');


/*Ssh, it's a secret*/
var credentials = require("./swearbot-credentials.json")


/*Initialize everything*/
var app = express();
var twilioClient = new twilio(credentials.twilio_sid, credentials.twilio_key);


/*Load in the insults*/
var insults = require("./insults.json")

/*Useful randomizer*/
var randomProperty = function (obj) {
  var keys = Object.keys(obj)
  return obj[keys[ keys.length * Math.random() << 0]];
};

var randomInsult = function(){
	return randomProperty(insults);
}

/*I mean, I hate texts*/
app.get('/sms', function(req, res){
	query = req.query //Saves me three keystrokes. But I don't even fucking *use* it.


	//Now to put together the poison
	const twiml = new twilio.twiml.MessagingResponse();
	const message = twiml.message();

	//We aren't picky with how we get angry
	message.body(randomInsult());
	res.writeHead(200, {'Content-Type':'text/xml'});
	res.end(twiml.toString());
});



/*It's 2017, WHO CALLS ANYMORE*/
app.get('/voice', function(req, res){

	//Now I need to get some words together
	const twiml = new twilio.twiml.VoiceResponse();
	twiml.say(randomInsult());
	twiml.pause();

	//Eh, let's get two for the price of one
	twiml.say(randomInsult());
	twiml.pause();
	twiml.pause();

	//Get out of my face
	twiml.hangup();
	res.writeHead(200, {'Content-Type':'text/xml'});
	res.end(twiml.toString());
})

app.get('/insults', function(req, res){
	res.json(insults);
})

app.get('/', function(req, res){
	res.send("There's nothing to see here.")
});


app.set('port', process.env.PORT || credentials.port );
http.createServer(app).listen(app.get('port'), function(){
	 console.log('Express server listening on port ' + app.get('port'));
});