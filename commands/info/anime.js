const fetch = require("node-fetch");
const emoji = require('../../config/emojis.json')
const { MessageEmbed } = require("discord.js");
const fn = require("../../functions");
module.exports = {
    name: "anime",
    description: "Search an Anime",
    usage: "<title>, [page]",
    category: 'info',
    aliases: ['ani','anime'],
    run: async (bot, message, args) => {
        if (!args.length) return message.reply("Baka! What Anime am I supposed to search for?");
        let title = args.join(" ");
        let def_page = 1;
        const { data } = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(title)}`)
            .then((r) => r.json());

        const msg = await message.channel.send("Searching...");
        // msg.channel.send("Found");
        if (!data || !data.length) return message.reply("No results found.");
        let page = def_page;
        let res = data[0];
        let flag = 1;
        do {
            // console.log('start');
            res = data[page - 1];
            if (!res) return msg.edit(`Invalid page ${page} there is only ${data.length} pages.`);
            msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
            const embed = new MessageEmbed()
                .setColor(0x9590EE)
                .setTitle(res.attributes.titles.en ? `${res.attributes.titles.en} (Japanese: ${res.attributes.titles.en_jp})` : res.attributes.titles.en_jp)
                .setDescription(res.attributes.synopsis)
                .addField("Age Rating", `${res.attributes.ageRating}${res.attributes.ageRatingGuide ? ` (${res.attributes.ageRatingGuide})` : ""}`)
                .addField("Episodes", `${res.attributes.episodeCount} (${res.attributes.episodeLength} Min Per Episode)`)
                .setImage(res.attributes.coverImage && res.attributes.coverImage.original)
                .setThumbnail(res.attributes.posterImage && res.attributes.posterImage.original)
                .setURL(`https://kitsu.io/anime/${res.id}`)
                .setFooter(`Page ${page}/${data.length}`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 64 }))

            msg.edit(embed);
            msg.react('⏪').then(() => msg.react('⏩'));

            const filter = (reaction, user) => {
                return ['⏪', '⏩'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            await msg.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === '⏪') {
                        page--;
                        // console.log(page);
                        if (page === 0) page = 1;
                        // console.log(page);
                    } else if (reaction.emoji.name === '⏩') {
                        page++;
                        // console.log(page);
                    }

                })
                .catch(collected => {
                    flag = 0;
                })
                ;
            // console.log('end');
            if(flag === 0) break;
        }
        while (res);
    },
};