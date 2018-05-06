const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login(NDQyNzI1MjI3MDcyNDU0NjU3.DdDFKg.xIJISjE_jlpb5pmYnDIuYBz-Tzw);
