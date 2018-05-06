const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ChromaBOT : /help");
    console.log("Bot Online!");
});

bot.login(NDQyNzI1MjI3MDcyNDU0NjU3.DdDFKg.xIJISjE_jlpb5pmYnDIuYBz-Tzw);
