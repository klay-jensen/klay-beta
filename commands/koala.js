const fetch = require('superagent');
const Discord = require ("discord.js");

module.exports = {
    name: "koala",
    description: "sends a cat pic",
    execute(message, args){
        fetch.get("https://some-random-api.ml/img/koala").then(x =>{
            const catEmbed = new Discord.MessageEmbed()
            .setTitle(":koala: Hoi! :wave:")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
    }
}