const { Activity } = require('discord.js');
const { prefix } = require('../../config/config.json');
module.exports = (bot) => {
    bot.user.setPresence({ activity: { name: 'Welcome | v 0.5.1', type: 'WATCHING' }, status: 'online' }).then(
    //     bot.user.setActivity(`Welcome | v 0.5.1`,{ type:"WATCHING" })
    //     bot.user.setStatus('dnd')
    console.log(`${bot.user.username} is coming online!!`))
}
// type: "STREAMING", url: "https://www.twitch.tv/a_better_player01"