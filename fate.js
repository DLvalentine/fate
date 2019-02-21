const Discord = require('discord.js');
const auth = require('./auth.json');
const channelList = require('./channels.json');
const fs = require('fs');
const {roll, format} = require('./dice.js');

require.extensions['.txt'] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const docs = require('./botDocs.txt');


// ************ CLIENT ******************* //
/**
 * client.channels.get(channelList.test).send('specific');
 * channel.send('source channel');
 * author.send('WHISPER!');
 */
const client = new Discord.Client();

client.on('ready', () => {
    console.log('> Fate has entered the chat.');
});

client.on('message', (evt) => {
    const {content, channel, author} = evt;
    const msg = content.substring(1).split(' ');
    const cmd = msg[0]; // the command sent to the bot
    const arg = msg[1]; // the arguments

    switch(cmd) {
        case 'r': 
            channel.send(roll(format(arg), author.username));
            break;
        case 'gr':
            author.send(roll(format(arg)));
            break;
        case 'help':
            author.send(docs); // send only to author, because that would get annoying.
            break;
    }
});

client.login(auth.token);