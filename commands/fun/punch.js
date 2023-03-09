const Discord = require("discord.js");
const emotes = require ("../../config/emojis.json");
module.exports = {
    name: 'punch',
    description: 'Punches a user for you',
    usage: `<user>`,
    category: 'fun',
    aliases: ['punch'],
    run: async (bot, message, arg) => {
        let user = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        const gif = ['https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif',
            'https://media.giphy.com/media/yo3TC0yeHd53G/giphy.gif',
            'https://media.giphy.com/media/DuVRadBbaX6A8/giphy.gif',
            'https://media.giphy.com/media/XKO2OnnJnmqxW/giphy.gif',
            'https://media.giphy.com/media/AlsIdbTgxX0LC/giphy.gif',
            'https://media.giphy.com/media/Z5zuypybI5dYc/giphy.gif',
            'https://media.giphy.com/media/1426DjQ2dTFkzK/giphy.gif',
            'https://media1.tenor.com/images/2b5d7bb1dd4a8e64869c33499c409582/tenor.gif?itemid=9509158',
            'https://media1.tenor.com/images/2efcac044a4f9f2377b118b1cc6282cb/tenor.gif?itemid=13142576',
            'https://media1.tenor.com/images/5109707cae9958f6ab63206037954a25/tenor.gif?itemid=18105611',
            'https://media1.tenor.com/images/709e94a0a8be1ea0d5bb3ac7401b0c76/tenor.gif?itemid=16122730',
            'https://media1.tenor.com/images/c8b23f7c445e9f018faffd35f93a552e/tenor.gif?itemid=13994709'
        ];
        const random_gif = gif[Math.floor(Math.random() * gif.length)];
        embed.setTitle('**PUNCHERS**')
            .setColor('RANDOM');
        if (!user) {
            embed.setDescription(`<@${message.author.id}> **punched SELF**`)
                .setImage(`${random_gif}`);
            await message.channel.send(embed);
        }
        else {
            embed.setDescription(`<@${message.author.id}> **punched** <@${user.id}>`)
                .setImage(`${random_gif}`);
           await message.channel.send(embed);
        }
    }
}