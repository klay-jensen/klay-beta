const fetch = require('superagent');
const Discord = require ("discord.js");

module.exports = {
    name: "redpanda",
    description: "sends a cat pic",
    execute(message, args){
        fetch.get("https://some-random-api.ml/img/red_panda").then(x =>{
            const catEmbed = new Discord.MessageEmbed()
            .setTitle(" Cute enough?  <:pepe_kawaii:828163618729361430> ")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
    }
}