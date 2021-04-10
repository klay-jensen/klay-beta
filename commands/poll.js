const pollEmbed = require('discord.js-poll-embed');

const Discord = require('discord.js')

module.exports = {
    name: 'poll',
    description: 'creates a poll',
    execute(message, args) {
    if (message.member.hasPermission('ADMINISTRATOR')){
            if(!args[0]){
             message.channel.send("So poll on nothing?")
            }else{
       
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(0).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle(pollDescription)
        .setAuthor(`${message.author.username} asks...`, message.author.displayAvatarURL())
        .setDescription("`"+"Choose one of the options below" +"`"+" <:pepeok:815779836340600832>")
        .setColor('RANDOM')
        
        .setTimestamp()
        
        message.channel.send(embedPoll).then(m =>{
            m.react("👍")
            m.react("👎")
            });
        }
    }
        
        else{
            message.react('821392999040024606')
            const serverlist = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} you dont have enough permissions 🙄.`) // use the general 'guilds' string. 
            .setColor('RANDOM')
            message.channel.send(serverlist)

        }
        
    }
}