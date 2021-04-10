const fetch = require('superagent');
const Discord = require ("discord.js");

module.exports = {
    name: "dog",
    description: "sends a cat pic",
    execute(message, args){
        fetch.get("https://some-random-api.ml/img/dog").then(x =>{
            const catEmbed = new Discord.MessageEmbed()
            .setTitle(":dog:  Woof! :dog:")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
    }
}