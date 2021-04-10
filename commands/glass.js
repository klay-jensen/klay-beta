const Discord = require('discord.js')
const fetch = require('superagent');
module.exports = {
    name: 'glass',
    description: 'Kinda self explanotory',
    execute(message, args){
    let member = message.mentions.users.first() || message.author
        
    let link = `https://some-random-api.ml/canvas/glass/?avatar=${member.displayAvatarURL({ format: 'png'})}`



// -------- Sending the image inside an embed --------
const attachment = new Discord.MessageAttachment(link, 'glass.png');
  const embed = new Discord.MessageEmbed()
    .setTitle(`What is this?`)
    .attachFiles(attachment)
    .setImage('attachment://glass.png')
    .setFooter('idk')
  message.channel.send(embed);
    }
}