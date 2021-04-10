const Discord = require('discord.js')

module.exports = {
    name: 'simpcard',
    description: 'Kinda self explanotory',
    execute(message, args){

let member = message.mentions.users.first() || message.author
let link = `https://some-random-api.ml/canvas/simpcard/?avatar=${member.displayAvatarURL({ format: 'png'})}`

let attachment = new Discord.MessageAttachment(link, 'triggered.gif');
message.channel.send(attachment);
     }
     }