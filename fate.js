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

    //construct cmd from user input, handle edge cases.
    let cmd = (content.match(/\!.*\s?/) || '!__NO-COMMAND');
    if (typeof cmd !== 'string') cmd = cmd[0];
    if (cmd === undefined || cmd === null) cmd = '!__NO-COMMAND';

    // prepare user's cmd and args to compute
    cmd = cmd.replace('!', '').trim();
    const arg = content.split(' ')[1]; // the command sent to the bot

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
        case 'fate':
            author.send(docs); // send only to author, because that would get annoying.
            break;
    }
});

client.login(auth.token);
