const fetch = require('superagent');
const Discord = require ("discord.js");

module.exports = {
    name: "bird",
    description: "sends a cat pic",
    execute(message, args){
        fetch.get("https://some-random-api.ml/img/birb").then(x =>{
            const catEmbed = new Discord.MessageEmbed()
            .setTitle(":bird: ")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
    }
}