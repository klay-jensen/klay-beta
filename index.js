const Discord = require('discord.js')
require("dotenv").config();
const client = new Discord.Client()

const prefix = ';;';

const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`${client.user.username} loaded up!`);
    
    setInterval(async ()=>{
        
        let textList = [';;help', 'not under dev', 'created by klay']
        var text = textList[Math.floor(Math.random() * textList.length)];
        client.user.setActivity(text , { type: 'LISTENING' })
    },5000) // milliseconds
});
    
client.on("message", message => {
    if (message.content == "Gay"){
        // message.content contains a forbidden word;
        // delete message, log, etc.
        message.channel.send("You gay")
      }
    if (message.content.has("<@751054122387767317>"){
        message.react("810551673868386315")
      }
    if (message.content.has("<@!751054122387767317>"){
        message.react("810551673868386315")
      }
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'purge'){
        client.commands.get('purge').execute(message, args);
    }else if (command === 'server'){
        client.commands.get('server').execute(message, args, client);
    } else if (command === 'onlyklaycanaccessthiscommand'){
        client.commands.get('onlyklaycanaccessthiscommand').execute(message, args, client);
    }else if (command === 'help'){
        client.commands.get('help').execute(client, message, args);
    }else if (command === 'rickroll'){
        client.commands.get('rickroll').execute(message, args);
    }else if (command === 'bon'){
        client.commands.get('bon').execute(message, args);
    }else if (command === 'moot'){
        client.commands.get('moot').execute(message, args);
    }else if (command === 'simprate'){
        client.commands.get('simprate').execute(message, args);
    }else if (command === 'simp'){
        client.commands.get('simprate').execute(message, args);
    }else if (command === 'gayrate'){
        client.commands.get('gayrate').execute(message, args);
    }else if (command === 'waifu'){
        client.commands.get('waifu').execute(message, args);
    }else if (command === 'pp'){
        client.commands.get('pp').execute(message, args);
    }else if (command === 'rad'){
        client.commands.get('rad').execute(message, args);
    }else if (command === 'rps'){
        client.commands.get('rps').execute(message, args);
    }else if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }else if (command === 'unban'){
        client.commands.get('unban').execute(message, args);
    }else if (command === 'rulescupicecream'){
        client.commands.get('rulescupicecream').execute(message, args);
    }else if (command === 'serverlockdown'){
        client.commands.get('serverlockdown').execute(message, args);
    }else if (command === 'lock'){
        client.commands.get('lock').execute(message, args);
    }else if (command === 'unlock'){
        client.commands.get('unlock').execute(message, args);
    }else if (command === '8ball'){
        client.commands.get('8ball').execute(client,message,args);
    }else if (command === 'warn'){
        client.commands.get('warn').execute(client,message,args);
    }else if (command === 'whois'){
        client.commands.get('whois').execute(client,message,args);
    }else if (command === 'lockdown'){
        client.commands.get('lockdown').execute(client,message,args);
    }else if (command === 'weather'){
        client.commands.get('weather').execute(client,message,args);
    }else if (command === 'trigger'){
        client.commands.get('trigger').execute(message,args);
    }else if (command === 'calculate'){
        client.commands.get('calculate').execute(client,message,args);
    }else if (command === 'ascii'){
        client.commands.get('ascii').execute(client,message,args);
    }else if (command === 'say'){
        client.commands.get('say').execute(client,message,args);
    }else if (command === 'covid'){
        client.commands.get('covid').execute(client,message,args);
    }else if (command === 'meme'){
        client.commands.get('meme').execute(message,args);
    }else if (command === 'slowmode'){
        client.commands.get('slowmode').execute(client, message,args);
    }else if (command === 'sm'){
        client.commands.get('slowmode').execute(client, message,args);
    }else if (command === 'roleinfo'){
        client.commands.get('roleinfo').execute(client, message,args);
    }else if (command === 'lockdown'){
        client.commands.get('lockdown').execute(client, message,args);
    }else if (command === 'maintenance'){
        client.commands.get('maintenance').execute(client, message,args);
    }else if (command === 'avatar'){
        client.commands.get('avatar').execute(message,args);
    }else if (command === 'av'){
        client.commands.get('avatar').execute(message,args);
    }else if (command === 'dog'){
        client.commands.get('dog').execute(message, args);
    }else if (command === 'cat'){
        client.commands.get('cat').execute(message, args);
    }else if (command === 'catto'){
        client.commands.get('cat').execute(message, args);
    }else if (command === 'doggo'){
        client.commands.get('dog').execute(message, args);
    }else if (command === 'dogs'){
        client.commands.get('dog').execute(message, args);
    }else if (command === 'cats'){
        client.commands.get('cat').execute(message, args);
    }else if (command === 'panda'){
        client.commands.get('panda').execute(message, args);
    }else if (command === 'pandas'){
        client.commands.get('panda').execute(message, args);
    }else if (command === 'redpanda'){
        client.commands.get('redpanda').execute(message, args);
    }else if (command === 'bird'){
        client.commands.get('bird').execute(message, args);
    }else if (command === 'birb'){
        client.commands.get('bird').execute(message, args);
    }else if (command === 'fox'){
        client.commands.get('fox').execute(message, args);
    }else if (command === 'foxxy'){
        client.commands.get('fox').execute(message, args);
    }else if (command === 'koala'){
        client.commands.get('koala').execute(message, args);
    }else if (command === 'dogfact'){
        client.commands.get('dogfact').execute(message, args);
    }else if (command === 'wasted'){
        client.commands.get('wasted').execute(message, args);
    }else if (command === 'gay'){
        client.commands.get('gay').execute(message, args);
    }else if (command === 'jail'){
        client.commands.get('jail').execute(message, args);
    }else if (command === 'glass'){
        client.commands.get('glass').execute(message, args);
    }else if (command === 'trigger'){
        client.commands.get('trigger').execute(message, args);
    }else if (command === 'triggered'){
        client.commands.get('trigger').execute(message, args);
    }else if (command === 'simpcard'){
        client.commands.get('simpcard').execute(message, args);
    }else if (command === 'hornycard'){
        client.commands.get('hornycard').execute(message, args);
    }else if (command === 'anime'){
        client.commands.get('anime').execute(message, args);
    }
        else if (command === 'advice'){
        client.commands.get('advice').execute(message, args);
    }else if (command === 'pandafact'){
        client.commands.get('pandafact').execute(message, args);
    }else if (command === 'caps'){
        client.commands.get('caps').execute(message, args);
    }else if (command === 'poll'){
        client.commands.get('poll').execute(message, args);
    }else if (command === 'ttt'){
        client.commands.get('ttt').execute(client,message, args);
    }else if (command === 'ship'){
        client.commands.get('ship').execute(client,message, args);
    }
    
});
client.login(process.env.TOKEN);

