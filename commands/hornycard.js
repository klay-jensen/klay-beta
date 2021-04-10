const Discord = require('discord.js')

module.exports = {
    name: 'hornycard',
    description: 'Kinda self explanotory',
    execute(message, args){

let member = message.mentions.users.first() || message.author
let link = `https://some-random-api.ml/canvas/horny/?avatar=${member.displayAvatarURL({ format: 'png'})}`
let memberid = member.id

const hEmbed = new Discord.MessageEmbed()
.setImage(link, 'triggered.gif')
.setFooter(`${member.tag} is permitted to be horny.`)
.setColor("RANDOM")
message.channel.send(hEmbed);
message.channel.send(`<@`+memberid+`> good going 👍`)
     }
     }