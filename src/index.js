const { Client, IntentsBitField } = require('discord.js');
const commands = require('./commands');
require('dotenv').config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (e) => {
    console.log(`${e.user.tag} online`);
});

const commandMap = new Map();
commands.forEach(command => {
    commandMap.set(command.name, command.reply);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) { return; }
    if (commandMap.has(interaction.commandName)) {
        interaction.reply(commandMap.get(interaction.commandName))
    }
});

client.login(process.env.TOKEN);
