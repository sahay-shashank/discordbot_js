const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client({
    disableEveryone: true,
    partials: ["REACTION"],
});
const queue = new Map();
const ytdl = require('ytdl-core');
// const mongoose = require("mongoose");
const config = require('./config/config.json');
const prefix = config.prefix;
const message = require("./events/guild/message");
const { Player } = require("discord-player")

const player = new Player(bot)
bot.player = player;

const token = config.token;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
bot.prefix = config.prefix;
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});
bot.on("ready", ()=> {
    require('./events/client/ready')(bot);
});
bot.on("message", async (message) => {
    message.member;
    message.author;
    require("./events/guild/message")(bot, message);
});
// bot.on("messageReactionAdd", (reaction, user) => {
//     require("./events/guild/messageReactionAdd")(reaction, user);
// });
//   bot.on("messageReactionRemove", (reaction, user) => {
//     require("./events/guild/messageReactionRemove")(reaction, user);
// });

bot.on('guildMemberAdd', async member => {
    require('./events/guild/welcome')(member);
});

bot.on('message', message => {
    if (message.content === '!join') {
        bot.emit('guildMemberAdd', message.member);
	}
});

// bot.on('message', async message => {

//     // if (message.author.bot) return;
//     // if (!message.content.startsWith(prefix)) return;

//     const serverQueue = queue.get(message.guild.id);
    
//     message.member; //-- GuildMember based
//     message.author; //-- User based

//     if (message.content.startsWith(`${prefix}play`)) {
//         execute(message, serverQueue);
//         return;
//     } else if (message.content.startsWith(`${prefix}skip`)) {
//         skip(message, serverQueue);
//         return;
//     } else if (message.content.startsWith(`${prefix}stop`)) {
//         stop(message, serverQueue);
//         return;
//     }
    // } else {
    //     message.channel.send('You need to enter a valid command!')
    // }
// });
bot.login(token)
/*
const Discord = require('discord.js');
const {
	prefix,
	token,
} = require('./config.json');
const ytdl = require('ytdl-core');

const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		return;
	} else {
		message.channel.send('You need to enter a valid command!')
	}
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
*/