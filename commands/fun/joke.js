const Discord = require('discord.js');
const oneLinerJoke = require('one-liner-joke');
const emotes = require ("../../config/emojis.json");
const embed = new Discord.MessageEmbed();
module.exports = {
    name: "joke",
    description: 'Get a random joke!',
    category: "fun",
    usage: '',
    aliases: ['joke'],
    run: async (bot, message, args) => {
        var joke = oneLinerJoke.getRandomJoke();
        embed.setDescription(joke.body)
            .setColor("RANDOM");
        message.channel.send(embed);
    },
};