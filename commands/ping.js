const Discord = require('discord.js');
var os = require('os');
const client = new Discord.Client() 


module.exports = {
    name: 'ping',
    description: 'calculate ping of the bot',
    execute(message, args){
      var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();


      var  getpercentage = ((usedMemory/totalMemory) * 10).toFixed(2) + "%`"
        message.channel.send("Pinging...").then(m =>{
          message.react('820739194073776128')
            // The math thingy to calculate the user's ping
              var ping = m.createdTimestamp - message.createdTimestamp;
  
            // Basic embed
              var embed = new Discord.MessageEmbed()
              .setTitle(`Pong! :ping_pong:`)
              .setDescription("API latency\n"+"`"+`${ping} ms`+"`\n\n" +"Memory used:\n`"+(usedMemory/ Math.pow(1024, 3)).toFixed(2)+" GB`"+"\n\nCPU used:\n`"+ getpercentage)
              .setColor("Your Color")
              
              // Then It Edits the message with the ping variable embed that you created
              m.edit(embed)
          });
      }
    }  