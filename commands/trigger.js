const Discord = require('discord.js')

module.exports = {
    name: 'trigger',
    description: 'Kinda self explanotory',
    execute(message, args){

let member = message.mentions.users.first() || message.author
let link = `https://some-random-api.ml/canvas/triggered/?avatar=${member.displayAvatarURL({ format: 'png'})}`

let attachment = new Discord.MessageAttachment(link, 'triggered.gif');
message.channel.send(attachment);
     }
     }
//send the attachment

// // -------- Sending the image inside an embed --------
// const attachment = new Discord.MessageAttachment(link, 'triggered.gif');
//   const embed = new Discord.MessageEmbed()
//     .setTitle(`${member.username} being trigerred like...`)
//     .attachFiles(attachment)
//     .setImage('attachment://triggered.gif')
//   message.channel.send(embed);
//     }
// }