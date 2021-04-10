const Discord = require('discord.js');
const ms = require ('ms');

module.exports = {
    name: 'slowmode',
    description: 'Kinda self explanotory',
    execute(client, message, args){
        const nosmEmbed = new Discord.MessageEmbed()
        .setTitle('Slowmode has been removed!')
        .setColor("RANDOM")
        if(!message.member.permissions.has('MANAGE_CHANNELS')) return;
        if(!args[0]){
            message.channel.setRateLimitPerUser(0);
            return message.channel.send(nosmEmbed)
             
        }
        if(isNaN(milliseconds)) return message.reply(err1Embed);
        const raw = args [0];
        const milliseconds = ms(raw);
        const err1Embed = new Discord.MessageEmbed()

        .setTitle("Don't try to break me, enter a valid number next time 😑")
        .setColor("RANDOM")
        
        const err2Embed = new Discord.MessageEmbed()
        .setTitle("Slowmode cant be under 1 second. Try again.")
        .setColor("RANDOM")
        const err3Embed = new Discord.MessageEmbed()
        .setTitle("Slowmode can't be more than 6 hours :( ")
        const smEmbed = new Discord.MessageEmbed()
        .setTitle(`The slowmode for this channel has been set to ${ms(milliseconds, {long: true})}`)
        .setColor("RANDOM")

        
        if(milliseconds < 1000) return message.reply(err2Embed);
        if(milliseconds > 21600000) return message.reply(err3Embed);

        message.channel.setRateLimitPerUser(milliseconds / 1000);
        message.channel.send(
            smEmbed
            
        )

    }
}
