const {messageEmbed, MessageEmbed} = require('discord.js');
const emotes = require ("../../config/emojis.json");
module .exports = {
    name: 'ping',
    category: 'info',
    description: "Returns time to reach to the server in ms",
    usage: '',
    aliases: ['ping'],
    run: async(bot,message,arg) => {
        const msg = await message.channel.send('Pinging....')
        const Embed = new MessageEmbed()
        .setTitle('Pong!!')
        .setDescription(`Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`)
        .setColor('RANDOM')
        msg.edit(Embed)
    }
}