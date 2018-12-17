const Discord = require('discord.js');
const five = require('johnny-five');
const client = new Discord.Client();
board = new five.Board();
board.on("ready", ()=>{
let led = new five.Led(13);
	client.on('message', msg => { 
		if (msg.content === "led on") led.on()
		else if (msg.content === "led off") led.off()
	});
});
client.login('YOUR BOT TOKEN HERE'); // https://discordapp.com/developers/applications/