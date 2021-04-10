const Discord = require ("discord.js");

module.exports = {
    name: "caps",
    
    description: "random caps",
    execute(message, args){
        //Checks if there is something to randomize
        if (!args[0]) return message.reply("Please also provide text to randomize");

        //Text needs to be in a const here
        const str = args.join(" ");

        //Gets the randomized text and sends it
        const randified = randify(str);
        message.channel.send(randified);

        //Randomizes the text
        function randify(string) {
            const arr = string.toLowerCase().split("");
            arr.forEach((e, i, a) => (Math.random() > .4) ? a[i] = e.toUpperCase() : e);
            return arr.join("");
        };
    }
}