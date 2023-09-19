const { Client, IntentsBitField } = require('discord.js');
const data = require("../token.json");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready' ,(e) => {
    console.log(`💪 ${e.user.tag} en linea`);
})

client.on('messageCreate', (msg) => {
    if (!msg.author.bot){
        if (msg.content == "hola") {
            msg.reply("hola")
        }
    }

    
})

client.login(data.token)
