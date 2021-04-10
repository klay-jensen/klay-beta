const fetch = require('superagent');
const Discord = require ("discord.js");
const Quotes = require('randomquote-api');

module.exports = {
    name: "advice",
    description: "sends a cat pic",
    execute(message, args){
        

        const Quotes = require('randomquote-api')

        // To get one random Quote you do
        
        const randomquote = Quotes.randomQuote();
        
        
        // to get Ten random quotes you do
        
        const randomTen = Quotes.randomTen()
        
        
        // to get a number amount of quotes by who said them
        
        const getbyauthor = Quotes.getbyauthor('J.R.R. Tolkien', 10)
        const quoteEmbed = new Discord.MessageEmbed()
        .setTitle("Advice.")
        .setDescription(randomquote.quote)
        .setFooter("By- "+randomquote.author)
        
        message.channel.send(quoteEmbed)
        
        
    }
}