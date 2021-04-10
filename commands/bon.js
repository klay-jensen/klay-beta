const Discord = require('discord.js');
    
 module.exports = {
    name: 'bon',
    description: 'Kinda self explanotory',
    execute(message, args){
        var member = message.mentions.members.first() || message.author;
        const memberTarget = message.guild.members.cache.get(member.id);

    // inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()

        .setTitle(`${memberTarget.displayName} Was banned from this guild.`)
        .setColor('RANDOM')
        .setDescription(`<@${memberTarget.user.id}> was banned from ${message.guild.name}\n\nTime: 69 Years\n\nReason: No reason mentioned`)
        .setThumbnail("https://cdn.discordapp.com/avatars/"+memberTarget.user.id+"/"+memberTarget.user.avatar+".jpeg")
        .setTimestamp()
        .setFooter('Totally not fake. 👀');
    
        message.channel.send(exampleEmbed);
           }
    }