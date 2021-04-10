const Discord = require('discord.js');
    
 module.exports = {
    name: 'unban',
    description: 'Kinda self explanotory',
    execute(message, args){
    if (message.member.hasPermission('BAN_MEMBERS'))
    
    {
            
        const memberTarget = args[0]
        if (args[0]){
            
            let userID = args[0]
            message.guild.fetchBans().then(bans=> {
            if(bans.size == 0) return 
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) return
            message.guild.members.unban(bUser.user).then(() =>{
            message.react('820739194073776128')
            const errEmbed = new Discord.MessageEmbed()
	            .setTitle("Unban successfull 🤡")
                .setColor('RANDOM')
                .setDescription("Unbanned user : <@"+args[0]+"> <:pepeok:815779836340600832>")
                .setFooter("Noice")
                .setThumbnail("")
            
                .setTimestamp();
            message.channel.send(errEmbed)
            
            }).catch(() => {
                message.react('821392999040024606')
                const errEmbed = new Discord.MessageEmbed()
	            .setTitle("ERROR")
                .setColor('RANDOM')
                .setDescription("I dont have enough permissions to do this or <@"+args[0]+"> is higher than me in the `role hierarchy` :( \n\n Permissions needed: `BAN_MEMBERS`\n"+"Alternatively, put me above <@"+memberTarget.id+"> in the `role hierarchy` <:pepeok:815779836340600832>")
            
                .setTimestamp();
                message.channel.send(errEmbed)
            });
        });
    }
    else{
        message.react('821392999040024606')
                const errEmbed = new Discord.MessageEmbed()
	            .setTitle("ERROR")
                .setColor('RANDOM')
                .setDescription("Mention a valid user ID or i dont have eough permissions to do this.")
            
                .setTimestamp();
            message.channel.send(errEmbed)

    }
    }
    else
        {
        message.react('821392999040024606')
        const exampleEmbed = new Discord.MessageEmbed()
	    .setTitle('Oops')
	    .setDescription('You dont have the permission `BAN_MEMBERS` :man_facepalming:');

        message.channel.send(exampleEmbed);
    }
    
}
 }
