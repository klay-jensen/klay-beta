const Discord = require("discord.js");


module.exports = {
    name: 'help',
    description: 'All help command',
    execute(client, message, args){
    
       
        if (!args[0])
        {
            const helpEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('KlayBot Help')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=826026233531334657&permissions=8&scope=bot')
            
            .setDescription("Thanks for using KlayBot!\nyou can view a category's cogs and commands using `!help Category.`")
            
            .addFields(
                { name: ':frame_photo: | Image', value: '`;;help Image`\nGenerate images and memes!',inline: true },
                //{ name: '\u200B', value: '\u200B' },
                { name: ':partying_face: | Fun', value: '`;;help Fun`\nSolo and group fun!', inline: true },
        
                { name: '‍', value: '‍', inline: true },
                { name: ':hammer: | Moderation', value: '`;;help Moderation`\nPowerful moderation tools.', inline: true },
                { name: ':tools: | Utility', value: '`;;help Utility`\nChat utility commands', inline: true },
                { name: '‍', value: '‍', inline: true },
                { name: ':dog: | Animals', value: '`;;help animals`\nAwww animal pics', inline: true },
	        { name: ':musical_note: | Music', value: '`;;helpmusic`\nBetter-than-groovy music bot.', inline: true },
                
                
                )
            
            
            .setFooter('Type ;;help <command_or_category> for more info on a command or a category.');
        
        message.channel.send(helpEmbed);
        }else if (args[0] === 'animals' || args[0] === 'animal') {
            const imageEmbed = new Discord.MessageEmbed()
		.setTitle("Animals Help")
		.setURL("https://discord.com/api/oauth2/authorize?client_id=826026233531334657&permissions=8&scope=bot")
		.setDescription("`birb / bird`, `cat / catto`, `dog / doggo`, `fox`, `koala`, `panda`, `redpanda`, `meme`")
		.setFooter("Awwww images fo you | Use prefix(;;) before each command!")
		.setColor("RANDOM");

        message.channel.send(imageEmbed)
    

        }else if (args[0] === 'fun'){
            const funEmbed = new Discord.MessageEmbed()
            .setTitle("Fun Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=826026233531334657&permissions=8&scope=bot")
            .setDescription("`8ball`, `ascii`, `bon(fake)`, `moot(fake)`, `gay / gayrate`, `lockdownsever(fake)`, `pp / dicksize`, `rad / rolladie`, `rps / rockpaperscissor`, `waifu / waifurate`, `simp / simprate`, `rickroll`, `caps`, `ship / love (checks love compatibilty bw two users)`")
            .setFooter("Fake commands look real, but are fake | Use prefix (;;) before each command!")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }else if (args[0] === 'moderation'){
            const funEmbed = new Discord.MessageEmbed()
            .setTitle("Moderation Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=826026233531334657&permissions=8&scope=bot")
            .setDescription("`ban`, `unban`, `kick`, `lock`, `unlock`, `viewlock`, `unviewlock`, `lockdown on/off`, `maintenance on/off`, `slowmode / sm`, `warn`, `purge (upto 99)`")
            .setFooter("Powerful moderation tools | Use prefix (;;) before each command!")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }else if (args[0] === 'utility'){
            const funEmbed = new Discord.MessageEmbed()
            .setTitle("Utility Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=826026233531334657&permissions=8&scope=bot")
            .setDescription("`roleinfo`, `avatar`, `calculate`, `covid`, `weather`, `ping`, `whois`, `help`, `poll`")
            .setFooter("Nice to have utility commands | Use prefix (;;) before each command!")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }else if (args[0] === 'image' || args[0] === 'images'){
            const funEmbed = new Discord.MessageEmbed()
            .setTitle("Image Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=826026233531334657&permissions=8&scope=bot")
            .setDescription("`glass / frost`, `gay`, `hornycard`, `jail`, `simpcard`, `trigger`")
            .setFooter("OP image manipulation commands | Use prefix (;;) before each command!")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }else if (args[0] === 'music'){
            message.channel.send("Please type ;;helpmusic, there is a little bug the devs are working on!")
	    message.channel.send("<:ok:811597016387420181>")
        }
    }
}

