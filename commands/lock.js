const Discord = require('discord.js');
    
 module.exports = {
    name: 'lock',
    description: 'Kinda self explanotory',
    execute(message, args){
        if (message.member.hasPermission('MANAGE_CHANNELS')) {
            if (!message.channel.permissionsFor(message.guild.roles.everyone).has('SEND_MESSAGES')) {
              const errorEmbed = new Discord.MessageEmbed()
                .setDescription(`❌ <#${message.channel.id}> is already locked.`)
                .setColor('RANDOM');
              message.channel.send(errorEmbed);
            }
            else{
              message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: false }).then(() => {
                message.channel.react("820739194073776128")
                const msgEmbed = new Discord.MessageEmbed()
                  .setDescription(`✅ <#${message.channel.id}> has been locked.`)
                  .setColor('RANDOM');
                message.channel.send(msgEmbed);
              });
               
            
            }
          }
          else {
            message.react("821392999040024606")
            const warningEmbed = new Discord.MessageEmbed()
              .setDescription('🔒 Sorry, you do not have sufficient permissions to do this.')
              .setColor('RANDOM');
            message.channel.send(warningEmbed);
          }
 }  
}