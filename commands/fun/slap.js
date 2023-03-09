const Discord = require("discord.js");
const emotes = require("../../config/emojis.json");
module.exports = {
    name: 'slap',
    description: 'Slaps a user for you',
    usage: `<user>`,
    category: 'fun',
    aliases: ['slap'],
    run: async (bot, message, arg) => {
        let user = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        const gif = ['https://media.giphy.com/media/3vDS40HZxJwFGTbXoI/giphy.gif',
            'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956',
            'https://media1.tenor.com/images/9179deae71e70c6573d3176287e4a4fe/tenor.gif?itemid=16762854',
            'https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720',
            'https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394',
            'https://media.giphy.com/media/Y6c59hTH3TJoA/giphy.gif',
            'https://media.giphy.com/media/K9rQXtu1XdsCQ/giphy.gif',
            'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
            'https://media.giphy.com/media/k1uYB5LvlBZqU/giphy.gif',
            'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
            'https://media1.tenor.com/images/1125596130202a28802dd2fe20804426/tenor.gif?itemid=17897244',
            'https://media1.tenor.com/images/e0d35ee1249d32399ecaa05f3fd22ae0/tenor.gif?itemid=11316221'];
        const random_gif = gif[Math.floor(Math.random() * gif.length)];
        embed.setTitle('**SLAPPERS**')
            .setColor('RANDOM');
        if (!user) {
            embed.setDescription(`<@${message.author.id}> **slapped SELF**`)
                .setImage(`${random_gif}`);
            return message.channel.send(embed);
        }
        else {
            embed.setDescription(`<@${message.author.id}> **slapped** <@${user.id}>`)
                .setImage(`${random_gif}`);
            return message.channel.send(embed);
        }
    }
}