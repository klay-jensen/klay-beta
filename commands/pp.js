const Discord = require('discord.js');

module.exports = {
    name: 'pp',
    description: 'Kinda self explanotory',
    execute(message, args){
        
        const member = message.mentions.members.first();
        const memberTarget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
        const options = [
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8D\n\n so sad :(`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8=D `,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8==D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8===D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8====D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8=====D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8======D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8=======D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8========D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8=========D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8===========D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8============D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8=============D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8==============D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8===============D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8================D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8=================D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n 8==========================================D`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n no pp   <:pepeok:815779836340600832>`,
            `<@${memberTarget.id}>'s pp size :eggplant: \n\n :infinity:\n\n You lucky hooman <:pepeok:815779836340600832>`
            
            

            ]
        
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send("Checking...:mag:").then(m =>{
        const ppEmbed = new Discord.MessageEmbed()
        .setTitle('peepee size machine')
        .setColor('RANDOM')
        .setDescription(`\n${option}`);
        setTimeout(function(){
        m.edit("Check complete :thumbsup:") }, 4000)
        setTimeout(function(){
        m.edit(ppEmbed) }, 4000)
        });
    
       
        
        
    }
}