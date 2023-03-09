const { MessageEmbed } = require("discord.js");
const emotes = require ("../../config/emojis.json");
const api = require("imageapi.js");
const message = require("../../events/guild/message");
module.exports = {
  name: "reddit",
  description: "Get a meme from a subreddit of your choice!",
  category: "fun",
  usage: "<subreddit>",
  aliases: ['red','reddit'],
  run: async (bot, message, args) => {
    const msg = await message.channel.send("Loading.");
    await msg.edit("Loading..");
    await msg.edit("Loading...");
    await msg.edit("Loading.");
    await msg.edit("Loading..");
    await msg.edit("Loading...");
    let Subreddit = message.content.slice(8);
    if (!Subreddit) return msg.edit(`You did not specify your subreddit!`);

    try {
      let img = await api(Subreddit, true);
      const Embed = new MessageEmbed()
        .setTitle(`A random image from r/${Subreddit}`)
        .setColor("RANDOM")
        .setImage(img)
        .setURL(`https://reddit.com/r/${Subreddit}`);
      await msg.edit("Aquiring Data, please wait.");
      await msg.edit("Aquiring Data, please wait..");
      await msg.edit("Aquiring Data, please wait...");
      await msg.edit("Aquiring Data, please wait.");
      await msg.edit("Aquiring Data, please wait..");
      await msg.edit("Aquiring Data, please wait...");
      msg.edit(Embed);
    } catch (err) {
      message.channel.send(err);
    }
  },
};
// const now = Date.now();
// const cooldownAmount = (20) * 1000;

// if (timestamps.has(message.author.id)) {
//     const expirationTime = now + cooldownAmount;

//     if (now > expirationTime) {
//         message.channel.send(`sorry, we couldn't find your reddit post`);
//     }
