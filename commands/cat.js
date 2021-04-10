const fetch = require('superagent');
const Discord = require ("discord.js");

module.exports = {
    name: "cat",
    aliases: ['catto', 'cats'],
    description: "sends a cat pic",
    execute(message, args){
        fetch.get("https://some-random-api.ml/img/cat").then(x =>{
            const catEmbed = new Discord.MessageEmbed()
            .setTitle(":cat: Meow! :cat: ")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
    }
}