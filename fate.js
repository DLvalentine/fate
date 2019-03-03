const fs = require('fs');
require.extensions['.txt'] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const auth = require('./auth.json');
const channelList = require('./channels.json');
const Discord = require('discord.js');
const docs = require('./botDocs.txt');
const {roll, format} = require('./dice.js');
const _ = require('lodash');


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
    const msg = content.substring(1).split(' '); // raw message
    const cmd = msg[0]; // the command sent to the bot
    _.remove(msg, (value, index) => {
        return index === 0;
    });    
    const arg = msg.join(''); // Util more arguments are accepted, combine it into one string.

    switch(cmd) {
        case 'r': 
            try { channel.send(roll(format(arg), author.username)); } catch (e) { channel.send('Them dice ain\'t right. Try again.'); }
            break;
        case 'gr':
            try { author.send(roll(format(arg))); } catch (e) { author.send('Them dice ain\'t right. Try again.'); }
            break;
        case 'srd':
            channel.send('[Pathfinder SRD](https://www.aonprd.com)');
            break;
        case 'help':
            author.send(docs); // send only to author, because that would get annoying.
            break;
    }
});

client.login(auth.token);
