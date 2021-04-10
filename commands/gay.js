const Discord = require('discord.js')
const fetch = require('superagent');
module.exports = {
    name: 'gay',
    description: 'Kinda self explanotory',
    execute(message, args){
    let member = message.mentions.users.first() || message.author
        
    let link = `https://some-random-api.ml/canvas/gay/?avatar=${member.displayAvatarURL({ format: 'png'})}`



// -------- Sending the image inside an embed --------
const attachment = new Discord.MessageAttachment(link, 'gay.png');
  const embed = new Discord.MessageEmbed()
    .setTitle(`Noice.`)
    .attachFiles(attachment)
    .setImage('attachment://gay.png')
    .setFooter('All lives matter.')
  message.channel.send(embed);
    }
}