const Discord = require('discord.js');

module.exports = {
    name: 'noobrate',
    description: 'Kinda self explanotory',
    execute(message, args){
        
        const member = message.mentions.members.first();
        const memberTarget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
        const options = [
            `<@${memberTarget.id}> is **1%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **2%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **3%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **4%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **5%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **6%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **7%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **8%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **9%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **10%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **11%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **12%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **13%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **14%** π½πΎπΎπ± `, 
            `<@${memberTarget.id}> is **15%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **16%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **17%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **18%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **19%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **20%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **21%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **22%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **23%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **24%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **25%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **26%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **27%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **28%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **29%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **30%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **31%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **32%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **33%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **34%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **35%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **36%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **37%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **38%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **39%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **40%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **41%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **42%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **43%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **44%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **45%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **46%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **47%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **48%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **49%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **50%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **51%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **52%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **53%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **54%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **55%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **56%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **57%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **58%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **59%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **60%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **61%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **62%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **63%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **64%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **65%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **66%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **67%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **68%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **69%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **70%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **71%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **72%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **73%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **74%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **75%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **76%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **77%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **78%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **79%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **80%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **81%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **82%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **83%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **84%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **85%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **86%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **87%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **88%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **89%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **90%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **91%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **92%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **93%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **94%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **95%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **96%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **97%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **98%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **99%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **100%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **101%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **6969%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **420%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **1000%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is **1001%** π½πΎπΎπ± `,
            `<@${memberTarget.id}> is not a π½πΎπΎπ± <:pepeok:815779836340600832>`

            ]
        
        const option = options[Math.floor(Math.random() * options.length)]
        const noobEmbed = new Discord.MessageEmbed()
        .setTitle('οΌ?ο½ο½ο½  r8 machine')
        .setColor('RANDOM')
        .setDescription(`\n${option}`);
        message.channel.send(noobEmbed);
    }
}
