const Discord = require('discord.js');
const auth = require('./auth.json');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('> Fate has entered the chat.');
});

client.on('message', (evt) => {
    const {content} = evt;
    const msg = content.substring(1).split(' ');
    const cmd = msg[0];
    const arg = msg[1]; // todo: support @ as a second arg

    switch(cmd) {
        case 'test': 
            console.log('CHANNEL ID HERE');
            break;
    }
});

client.login(auth.token);