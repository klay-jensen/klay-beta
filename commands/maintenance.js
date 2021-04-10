const Discord = require('discord.js')

module.exports = {
    
        name: "maintenance",
        description: "lock server and hide channels in server",
     
    execute(client, message, args){
        let lockPermErr = new Discord.MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") ) return message.channel.send(lockPermErr);

        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false, VIEW_CHANNEL: false
                })
            })
            
            let lockEmbed = new Discord.MessageEmbed()
                
                .setThumbnail(`https://media.giphy.com/media/JozO6wdFcC81VPO6RS/giphy.gif`)
                .setDescription(`**Server maintencance mode is now ON 🌻\n\nNo channels are visible to the members of the server.**`)
                .setColor('#2F3136')
            return message.channel.send(lockEmbed);

        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true, VIEW_CHANNEL: true
                })
            })
            
            let lockEmbed2 = new Discord.MessageEmbed()
                .setColor('#2F3136')    
                .setThumbnail(`https://media.giphy.com/media/JozO6wdFcC81VPO6RS/giphy.gif`)
                .setDescription(`**Server maintencance mode is now OFF 🌻\n\nMembers can now view as well and send messages in the channels**`)
            return message.channel.send(lockEmbed2)
        }
    }
}