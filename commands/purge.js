const Discord = require('discord.js');

const client = new Discord.Client()

module.exports = {
    name: 'purge',
    description: 'Bulk deletes the given arguement',
    execute(message, args){
        
        if (message.member.hasPermission('MANAGE_MESSAGES'))
    {
        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 1 || deleteCount >= 100) 
        {
            message.react('821392999040024606')
            const purgeLimit = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} enter a valid integer between 1 - 99\n\n`) // use the general 'guilds' string. 
            .setDescription("Dont try to break me <:pepecryignore:810553257352495105>")
            .setColor('RANDOM')
            message.channel.send(purgeLimit)
        }
        else if (!deleteCount || deleteCount > 1 || deleteCount < 100)
        {
        message.react('820739194073776128')
        message.channel.bulkDelete(deleteCount + 1)
        const success = new Discord.MessageEmbed()
        .setTitle(`:white_check_mark: Cleared  **${args[0]}**  message(s)!`) // use the general 'guilds' string. 
        .setColor('RANDOM')
        message.channel.send(success).then(message => {message.delete({timeout:2000})});
    }
        
    }
        else{
            message.react('821392999040024606')
            const serverlist = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} You dont have enough permissions 🙄.`) // use the general 'guilds' string. 
            .setColor('RANDOM')
            message.channel.send(serverlist)
        }
    }
}