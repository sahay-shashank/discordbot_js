const Discord = require('discord.js');
const emotes = require("../../config/emojis.json");
const embed = new Discord.MessageEmbed();
module.exports = {
    name: "kill",
    description: 'kills a user.',
    category: "fun",
    usage: '<user>',
    aliases: ['kill'],
    run: async (bot, message, args) => {
        embed.setColor('#FF0000');
        let user = message.mentions.users.first();
        if (!user || (user.id === message.author.id)) user = message.author;

        //!kill <user>
        const death_message = [`Goku killed **${user.username}** with a spirit bomb.`,
        `**${user.username}** got no scoped by s1mple.`,
        `John Wick killed **${user.username}** with an eraser.`,
        `**${user.username}** fell off a cliff while taking a selfie.`,
        `Boss killed **${user.username}** with extra work.`,
        `Agent 47 assassinated **${user.username}** with a shoe.`,
        `**${user.username}** died out of laughter after listening to Cooper Sheldon's joke.`];

        //!kill
        const death_suicide = [`You did a back flip and ended up on your head getting smacked on a wall.`,
            `You took a leap of faith and realized you will not respawn.`,
            'You died of heart-attack after overeating.',
            'You died of hard work to impress your boss.',
            'You died due to overthinking about yourself.s'];

        let death =
            death_message[Math.floor(Math.random() * death_message.length)];
        let suicide =
            death_suicide[Math.floor(Math.random() * death_suicide.length)];

        if (user.id === message.author.id) {
            embed.setTitle("SUICIDE");
            embed.setDescription(`${suicide}`)
            return message.channel.send(embed);
        }
        embed.setTitle('DEATH')
        embed.setDescription(`${death}`)
        return message.channel.send(embed);

    }
}