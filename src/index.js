const { Client, IntentsBitField } = require('discord.js');

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
    if (msg.content == "hola") {
    }
})

client.login("MTE1Mzc0Mzc4MTYyNDAyMTAxMg.GuVXo3.LPIahGpD0MwXbP8V2mpxgGeENlhOutr5LpwUNc")