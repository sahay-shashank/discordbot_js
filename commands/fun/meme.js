const { MessageEmbed } = require("discord.js");
const emotes = require ("../../config/emojis.json");
const api = require("imageapi.js");
module.exports = {
  name: "meme",
  description: "Gets a meme!",
  category: "fun",
  usage: '',
  aliases: ['meemee','mee','meme'],
  run: async (bot, message, args) => {
    let subreddits = ["comedyheaven", "dank", "meme", "memes"];
    let subreddit =
      subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setTitle(`**Memers**`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};