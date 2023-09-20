const { ApplicationCommandOptionType } = require("discord.js");

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
        reply: 'hey!'
    },
    {
        name: 'ping',
        description: 'pong',
        reply: 'pong!'
    },
    {
        name: 'zas',
        description: 'zas gallego cabron',
        reply: '<@286402429258301440> gallego hijo de puta'
    },
    {
        name: 'chris',
        description: 'chris puto friki',
        reply: '<@463832189637885962> muy buena, muy buena'
    },
    {
        name: 'omar',
        description: 'la bestia',
        reply: '<@324185049966575617> el mejor del server'
    },
    {
        name: 'decimales',
        description: 'no porfa',
        reply: 'no le pongais decimales a la calculadora que se estresa :('
    },
    {
        name: 'add',
        description: 'la bestia',
        reply: '',
        options:[
            {
                name: 'first-number',
                description: 'first-number',
                type: ApplicationCommandOptionType.Number,
                required: true
            },
            {
                name: 'second-number',
                description: 'second-number',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    }
];

const commandsNumeros = [
    {
        
    }
]

module.exports = commands;