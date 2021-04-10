const Discord = require('discord.js');
    
 module.exports = {
    name: 'moot',
    description: 'Kinda self explanotory',
    execute(message, args){
        const member = message.mentions.members.first() || message.author;
        const memberTarget = message.guild.members.cache.get(member.id);

    // inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()

        .setTitle(`${memberTarget.displayName} was muted.`)
        .setColor('RANDOM')
        .setDescription(`<@${memberTarget.user.id}> was muted in ${message.guild.name}\n\nTime: 69420 years\n\nReason: gay`)
        .setThumbnail("https://cdn.discordapp.com/avatars/"+memberTarget.user.id+"/"+memberTarget.user.avatar+".jpeg")
        .setTimestamp()
        .setFooter('Totally not fake. 👀', 'https://cdn.discordapp.com/emojis/811597016387420181.png?v=1');
    
        message.channel.send(exampleEmbed);
           }
    }