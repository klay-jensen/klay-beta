const Discord = require('discord.js')
const fetch = require('superagent');
module.exports = {
    name: 'jail',
    description: 'Kinda self explanotory',
    execute(message, args){
    let member = message.mentions.users.first() || message.author
        
    let link = `https://some-random-api.ml/canvas/jail/?avatar=${member.displayAvatarURL({ format: 'png'})}`



// -------- Sending the image inside an embed --------
const attachment = new Discord.MessageAttachment(link, 'jail.png');
  const embed = new Discord.MessageEmbed()
    .setTitle(`Tf?`)
    .attachFiles(attachment)
    .setImage('attachment://jail.png')
    .setFooter('why bro?')
  message.channel.send(embed);
    }
}