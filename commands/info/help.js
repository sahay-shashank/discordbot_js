const { MessageEmbed } = require("discord.js");
const { readdirSync } = require('fs');
const { default_prefix } = require('../../config/config.json');

const emotes = require ("../../config/emojis.json");
const db = require("quick.db");

module.exports = {
    name: "help",
    description: "Helps you with BOT COMMANDS",
    category: "info",
    usage: '<command name>',
    aliases: ['help', 'h'],
    run: async (bot, message, args) => {
        const embed = new MessageEmbed;
        embed.setTitle('**COMMANDS**')
            .setColor('RANDOM');
        const info_data = [];
        const fun_data = [];
        const misc_data = [];
        // data.push(bot.commands.map(command => command.name).join('\n'));
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = default_prefix;
        if (!args[0]) {
            
            const fun_commands = readdirSync(`./commands/fun/`).filter(file => file.endsWith('.js'));
            const info_commands = readdirSync(`./commands/info/`).filter(file => file.endsWith('.js'));
            const misc_commands = readdirSync(`./commands/misc/`).filter(file => file.endsWith('.js'));
            
            
            
            
            for (let fun_file of fun_commands) {
                let fun_pull = require(`../../commands/fun/${fun_file}`);
                if (fun_pull.name) {
                    fun_data.push(fun_pull.name);
                }
            };
            for (let misc_file of misc_commands) {
                let misc_pull = require(`../../commands/misc/${misc_file}`);
                if (misc_pull.name) {
                    misc_data.push(misc_pull.name);
                }
            };
            for (let info_file of info_commands) {
                let info_pull = require(`../../commands/info/${info_file}`);
                if (info_pull.name) {
                    info_data.push(info_pull.name);
                }
            };
            embed.addFields(
                { name: '**FUN**', value: fun_data.join('\n'), inline: true },
                { name: '**INFO**', value: info_data.join('\n'), inline: true },
                { name: '**MISC**', value: misc_data.join('\n'), inline: true },
               
            )
                .setFooter('Use ' + prefix + `help ` + '<command name>');
            return message.channel.send(embed);
        }
        let command = bot.commands.get(args[0]) || bot.commands.get(bot.aliases.get(args[0]));
        if (!command) message.channel.send('No such command');
        if (command) {
            embed.addFields(
                { name: '**COMMAND NAME**', value: command.name },
                { name: '**DESCRIPTION**', value: command.description },
                { name: '**CATEGORY**', value: command.category, inline: true },
                { name: '**USAGE**', value: prefix + `${command.name} ` + command.usage, inline: true },
                { name: '**ALIASES**', value: command.aliases.join(', ') },
            );
            return message.channel.send(embed);
        }
    
    },
};
