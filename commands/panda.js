const fetch = require('superagent');
const Discord = require ("discord.js");

module.exports = {
    name: "panda",
    description: "sends a cat pic",
    execute(message, args){
        fetch.get("https://some-random-api.ml/img/panda").then(x =>{
            const catEmbed = new Discord.MessageEmbed()
            .setTitle(":panda_face:  Hello there!  :panda_face: ")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
    }
}