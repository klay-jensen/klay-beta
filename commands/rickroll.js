const Discord = require('discord.js');
const client = new Discord.Client()

module.exports = {
    name: 'rickroll',
    description: 'Kinda self explanotory',
    execute(message, args){
        const Discord = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CLICK ME')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setThumbnail('https://cdn.discordapp.com/attachments/800276748595757098/821614344478916608/FHxOobESKvrcEov1J8Y57g_store_logo_image.png')
	.setTimestamp()
	.setFooter('wont regret :)');

message.channel.send(exampleEmbed);


    }
}