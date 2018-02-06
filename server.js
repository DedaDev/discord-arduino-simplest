const Discord = require('discord.js');
const five = require('johnny-five');
const client = new Discord.Client();
board = new five.Board();
board.on("ready", function(){
var led = new five.Led(13);
	client.on('message', message => { 
		if (message.content === "led on"){
			led.on()
		}else if (message.content === "led off"){
			led.off()
		};
	});
});
client.login('YOUR TOKEN HERE');
