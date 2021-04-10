const randomanime = require('random-anime')
const anime = randomanime.anime()

const Discord = require ('discord.js')

module.exports = {
    name: 'anime',
    description: 'Kinda self explanotory',
    execute(message, args){
    const anime = randomanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send(embed);
    }
}