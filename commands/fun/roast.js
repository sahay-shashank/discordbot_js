const Discord = require("discord.js");
const emotes = require("../../config/emojis.json");
module.exports = {
    name: 'roast',
    description: 'Roasts a user for you',
    usage: `<user>`,
    category: 'fun',
    aliases: ['roast'],
    run: async (bot, message, arg) => {
        let user = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        const roast = ['No I didn\'t say you were stupid. \nI said you are stupid there is nothing past tense about it.',
            'I am not saying that I hate you.\nI\'m just saying if you got hit by a bus, I would be driving that bus.',
            'Awww my middle finger likes you.',
            'Don\'t get mad when I pull a you on you.',
            'Rose are red, \nViolets are blue, \nI\'ve got five fingers, \nthe middle one is for you.',
            'You speak an infinite deal of nothing.',
            'I\'d slap you, but that\'d be animal abuse.',
            'You must have been born on a highway because that\'s where most accident happen.',
            'I\'m sorry what language are you speaking?\nIt sound like bulshit.',
            'Stop calling yourself hot, the only thing you can turn on is the microwave.',
            'I was going to give you a nasty look...\nbut I see you already have one.',
            'Here\'s a tissue, you have a little bulshit on your lip',
            'I don\'t have energy to pretend I like you today.',
            'If you ran like your mouth you\'d be in good shape.',
            'You should introduce your upper lips to your lower lip sometime & shut up.',
            'Arrogance and stupidity all in one package. How efficient of you.',
            'If laughter is the best medicine, your face must be curing the world!',
            'I love when someone insults me. that means that I don\'t have to be nice anymore.',
            'Zombies eat brains...\ndon\'t worry, most of you have nothing to worry about.',
            'You talk so much shit.\nI don\'t know whether to offer you a breath mint or toilet paper.',
            'I would make fun of you but i don\'t think you\'d understand it.',
            'There aren\'t enough curse words in the world to satisfy me right now.',
            'No, no, no, I\'m not insulting you. I\'m describing you.',
            'If I wanted to kill myself I would climb your ego and jump to your IQ.'];
        const random_roast = roast[Math.floor(Math.random() * roast.length)];
        embed.setTitle(`${message.author.username} **ROASTED** ${user.username}`)
            .setColor('RANDOM');
        if (user) {
            embed.setDescription(`${random_roast}`)
            await message.channel.send(embed);
        }
        else {
            embed.setDescription(`<@${message.author.id}> mention someone...`)
            await message.channel.send(embed);
        }
    }
}