const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Kinda self explanotory',
    execute(message, args){
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({dynamic : true, size: 1024})


        const embed = new Discord.MessageEmbed()
        .setAuthor(`${member.tag}`, member.displayAvatarURL({dynamic : true}))
        .setTitle(`Avatar`)
        .setImage(avatar)
        .setColor("RANDOM")     

        message.channel.send(embed);
}
}