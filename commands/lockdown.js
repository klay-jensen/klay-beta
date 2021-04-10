const Discord = require('discord.js')

module.exports = {
    
        name: "lockdown",
        description: "lock server",
     
    execute(client, message, args){
        let lockPermErr = new Discord.MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        
        if(!message.channel.permissionsFor(message.member).has("BAN_MEMBERS") ) return message.channel.send(lockPermErr);

        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false, VIEW_CHANNEL: true
                })
            })
            
            let lockEmbed = new Discord.MessageEmbed()
                
                .setThumbnail(`https://media.giphy.com/media/JozO6wdFcC81VPO6RS/giphy.gif`)
                .setDescription(`**\n\nDone! Server Fully Locked! 🔒**`)
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
                .setDescription(`**\n\nDone! Server Fully Unlocked! 🔓**`)
            return message.channel.send(lockEmbed2)
        }
    }
}