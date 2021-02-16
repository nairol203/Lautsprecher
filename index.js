require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();
const elevatorMusic = require('./elevator-music');

client.on('ready', async () => {
	const messages = [
		'Ufo361',
		'Lil Peep',
		'Edo Saiya',
		'KASIMIR1441',
		'Gzuz',
		'Bonez MC',
		'187 Strassenbande',
		'The Weeknd',
		'Juice WRLD',
		'Freakso',
		'Selphius',
		'KD/A',
		'TWICE',
		'NF',
		'Alligatoah',
		'GReeeN',
		'Rass Limit',
		'Machine Gun Kelly',
		'Our Last Night',
	];
	const randomArtist = messages[Math.floor(Math.random() * messages.length)];
	client.user.setActivity(randomArtist, { type : 'LISTENING' });
	elevatorMusic(client);
	console.log(`${client.user.username} is online!`);

});

client.login(process.env.TOKEN);