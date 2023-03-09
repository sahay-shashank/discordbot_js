const Discord = require("discord.js");
const emotes = require ("../../config/emojis.json");
module.exports = {
    name: 'kick',
    description: 'Kicks a user for you',
    usage: `<user>`,
    category: 'fun',
    aliases: ['joke'],
    run: async (bot, message, arg) => {
        let user = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        const gif = ['https://media.giphy.com/media/qiiimDJtLj4XK/giphy.gif',
            'https://media.giphy.com/media/ujGq75KELBkffmo0RW/giphy.gif',
            'https://media1.tenor.com/images/fb2a19c9b689123e6254ad9ac6719e96/tenor.gif?itemid=4922649',
            'https://media.tenor.com/images/808337dd6b325328710d0fba000a731c/tenor.gif',
            'https://media1.tenor.com/images/1071791f88205a82dfc4448f08a6b25c/tenor.gif?itemid=17562086',
            'https://media.tenor.com/images/d6bd403a5aeef8536eaf8451f80c1413/tenor.gif',
            'https://media1.tenor.com/images/ea2c3b49edf2080e0ef2a2325ddb4381/tenor.gif?itemid=14835708',
            'https://media1.tenor.com/images/46e63f496654ba22f7a34fa5628d8ed9/tenor.gif?itemid=17536300',
            'https://media1.tenor.com/images/577ecef137a88a9149f375d225724b34/tenor.gif?itemid=15524285',
            'https://media1.tenor.com/images/cc217519af48fe13bea6004afb36f1f2/tenor.gif?itemid=5738223',
            'https://media1.tenor.com/images/04d10b9485af324be182902ee9bdfd71/tenor.gif?itemid=17730026',
            'https://media1.tenor.com/images/e4a2a5dea2ea65a57fa8f6859cb305a0/tenor.gif?itemid=12868265'
        ];
        const random_gif = gif[Math.floor(Math.random() * gif.length)];
        embed.setTitle('**KICKERS**')
            .setColor('RANDOM');
        if (!user) {
            embed.setDescription(`<@${message.author.id}> **kicked SELF**`)
                .setImage(`${random_gif}`);
            await message.channel.send(embed);
        }
        else {
            embed.setDescription(`<@${message.author.id}> **kicked** <@${user.id}>`)
                .setImage(`${random_gif}`);
           await message.channel.send(embed);
        }
    }
}