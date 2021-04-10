const Discord = require('discord.js');

const client = new Discord.Client()


module.exports = {
    name: 'onlyklaycanaccessthiscommand',
    description: 'List and number of servers bot is in',
    execute(message, args, client){
        
        if (message.member.hasPermission('ADMINISTRATOR'))
        {
message.delete()
 message.react('820739194073776128')
 message.channel.send(':white_check_mark: **Stats of KlayBot** :white_check_mark: ')
  let mcount = client.users.cache.size;
  const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setDescription('**Users:**`' + `${mcount}` + '`')
    message.channel.send(exampleEmbed1);
  let scount = client.guilds.cache.size;
    const exampleEmbed2 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setDescription('**Servers:**`' + `${scount}` + '`')
    message.channel.send(exampleEmbed2);
  let tcount = message.guild.channels.cache.filter((c) => c.type === "text").size;
    
        let guilds = '';
        client.guilds.cache.forEach((guild) => {
            guilds = guilds.concat(guild).concat("\n"); // concatenate the guild and add a new line in the end.
        })
        const serverlist = new Discord.MessageEmbed()
        .setTitle(`𝘚𝘦𝘳𝘷𝘦𝘳𝘴 KlayBot 𝘪𝘴 𝘪𝘯.`)
        .setDescription(guilds) // use the general 'guilds' string.
        .setFooter(`DM #Klay Jensen#9999 to invite!`)
        .setColor('RANDOM')
        message.channel.send(serverlist)
    }
    else{
        
        const serverlist = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} You dont have enough permissions 🙄.`) // use the general 'guilds' string. 
        .setColor('RANDOM')
        message.channel.send(serverlist)
    }
}
}