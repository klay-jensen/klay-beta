const Discord = require('discord.js')
const fetch = require('superagent');
module.exports = {
    name: 'wasted',
    description: 'Kinda self explanotory',
    execute(message, args){
    let member = message.mentions.users.first() || message.author
        
    let link = `https://some-random-api.ml/canvas/wasted/?avatar=${member.displayAvatarURL({ format: 'png'})}`



// -------- Sending the image inside an embed --------
const attachment = new Discord.MessageAttachment(link, 'wasted.png');
  const embed = new Discord.MessageEmbed()
    .setTitle(`${member.username} is wasted.`)
    .attachFiles(attachment)
    .setImage('attachment://wasted.png')
    .setFooter('F to pay respects.')
  message.channel.send(embed);
    }
}