const Discord = require('discord.js');
    
 module.exports = {
    name: 'unlock',
    description: 'Kinda self explanotory',
    execute(message, args){
        if (message.member.hasPermission('MANAGE_CHANNELS')) {
            if (message.channel.permissionsFor(message.guild.roles.everyone).has('SEND_MESSAGES')) {
              const errorEmbed = new Discord.MessageEmbed()
                .setDescription(`❌ <#${message.channel.id}> is already unlocked.`)
                .setColor('RANDOM');
              message.channel.send(errorEmbed);
            }
            else{
              message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: true }).then(() => {
                const msgEmbed = new Discord.MessageEmbed()
                  .setDescription(`✅ <#${message.channel.id}> has been unlocked.`)
                  .setColor('RANDOM');
                message.channel.send(msgEmbed)
              }).catch(()=>{
                message.react("821392999040024606")
                });
        }
          }
          else {
            const warningEmbed = new Discord.MessageEmbed()
              .setDescription('🔒 Sorry, you do not have sufficient permissions to do this.')
              .setColor('RANDOM')
              .setFooter('F in chat.')
            message.channel.send(warningEmbed);
          }
 }  
}