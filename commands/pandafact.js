const fetch = require('superagent');
const Discord = require ("discord.js");

module.exports = {
    name: "pandafact",
    description: "sends a cat pic",
    execute(message, args){
        const fetch = require('node-fetch')

fetch('https://some-random-api.ml/facts/panda')
    .then(res => res.json())
    .then(json => {
        
        const faxEmbed = new Discord.MessageEmbed()
        .setTitle("Panda fact?")
        .setDescription("`"+json.fact+"`")
        .setColor("RANDOM")
        .setFooter("Kawaii af")
        
        message.channel.send(faxEmbed);
    });
        }
    }
