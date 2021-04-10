const Discord = require('discord.js');
    
 module.exports = {
    name: 'serverlockdown',
    description: 'Kinda self explanotory',
    execute(message, args){
        

    // inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()

        .setTitle(`Locked down 37/37 channels in ${message.guild.name}`)
        .setDescription("<:pepeok:815779836340600832>")
        .setColor("RANDOM")
        message.channel.send("**Locking channels, it will take 7s in ideal conditions...**").then(m =>{
            setTimeout(function(){
            m.edit(exampleEmbed) }, 7000)
        });
           }
    }