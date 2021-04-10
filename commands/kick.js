const Discord = require('discord.js');
    
 module.exports = {
    name: 'kick',
    description: 'Kinda self explanotory',
    execute(message, args){
        const member = message.mentions.users.first()
    if (message.member.hasPermission('KICK_MEMBERS'))
            {
        if(member){
            
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.kick().then(() =>{
            message.react('820739194073776128')
            const exampleEmbed = new Discord.MessageEmbed()
	        .setTitle(`<@${memberTarget.user.id}> was kicked from ${message.guild.name}`)
            .setColor('RANDOM')
            .setDescription("Kicked user <@"+ memberTarget.id +"> <:pepeok:815779836340600832>")
            .setFooter(`Action by ${message.author.id}`)
            .setThumbnail("https://cdn.discordapp.com/avatars/"+memberTarget.user.id+"/"+memberTarget.user.avatar+".jpeg")
            .setTimestamp();

            message.channel.send(exampleEmbed)
            const kickEmbed = new Discord.MessageEmbed()
	        .setTitle("You were kicked")
            .setColor('RANDOM')
            .setDescription(`Sadly, you were kicked from ${message.guild.name}\n\nYou can ask the Admins/ Mods to send you an invite link to join again.`)
            
            .setImage('https://cdn.discordapp.com/attachments/783338766743109659/823099196033990716/tenor.png')
            .setTimestamp();

            member.send(kickEmbed)
            member.send("<:pepeok:815779836340600832>")
            }).catch(() => {
                message.react('821392999040024606')
                const errEmbed = new Discord.MessageEmbed()
	            .setTitle("ERROR")
                .setColor('RANDOM')
                .setDescription("I dont have enough permissions to do this or <@"+memberTarget.id+"> is higher than me in the `role hierarchy` :( \n\n Permissions needed: `KICK_MEMBERS`\n"+"Alternatively, put me above<@"+memberTarget.id+"> in the role hierarchy :)")
            
                .setTimestamp();
                message.channel.send(errEmbed)

                });
            
            

        } else {
            message.react('821392999040024606')
            const exampleEmbed = new Discord.MessageEmbed()
	        .setTitle('Oops')
            .setColor('RANDOM')
	        .setDescription('Dont try to break me, try mentioning the person to be kicked next time smh. :person_facepalming:');

            message.channel.send(exampleEmbed);
        }



    }
    else{
        message.react('821392999040024606')
        const exampleEmbed = new Discord.MessageEmbed()
	        .setTitle('Oops')
	        .setDescription('You dont have the permission `KICK_MEMBERS` :man_facepalming:');

            message.channel.send(exampleEmbed);
    }

}
}