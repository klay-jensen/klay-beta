const Discord = require('discord.js');

module.exports = {
    name: 'rps',
    description: 'Kinda self explanotory',
    execute(message, args){
        
        const memberTarget = message.author;
        const options = [
            `<@${memberTarget.id}> you got rock :shell:`,
            `<@${memberTarget.id}> you got paper :newspaper2:`,
            `<@${memberTarget.id}> you got scissor :scissors:`
            
            

            ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send("Playing...").then(m =>{
       
        const rpsEmbed = new Discord.MessageEmbed()
        .setTitle('You got...')
        .setColor('RANDOM')
        .setDescription(`\n${option}`);
        setTimeout(function(){
        m.edit(rpsEmbed) }, 2000)
        
        
    });
    }
}