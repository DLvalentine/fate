# fate
A dice roller bot for discord! 

### Adding fate to your Discord Server
[Click here to do that.](https://discordapp.com/api/oauth2/authorize?client_id=548192715129749544&permissions=7168&scope=bot)

I run this on a little raspberry pi out of my basement... so... if there's a ton of traffic I imagine it won't be pretty. Maybe one day I'll move it to AWS or something.

### So you forked it? Now what?
You can create an app/bot via [Discord for Developers](https://discordapp.com/developers/applications/)

fate requires [NodeJS](https://nodejs.org/) to run, as it was imlpemented in JS.

Be sure to open `auth.json` and include the secret token that Discord will use to login as that bot. You can also include specific channels on your server in `channels.json` to be able to send messages strictly to a specificed channel.

1. clone/download repo
2. `cd` to directory*
3. `npm install`
4. `node fate.js` 

\* 2.5 See above note for updating `auth.json` and (optionally) `channels.json`

~ let fate decide ~

# Commands
`!help` : Print the commands.... y'know. This.

`!r [argument]` : Given a dice string, like `3d6`, roll a specified number of dice of a type. No need to include `1` for single die. You can add bonuses or penalties with `-` and `+` after the quantity/type string.

`!gr [argument]` : the same as `!r`, but will be whispered to the author for a "hidden" roll. Typically used for GMs

`!srd` : Posts a link to the online SRD for Pathfinder.... maybe one day configurable to go to other SRDs

## Examples 
`!r d20`: roll 1 d20.

`!r 2d20`: roll 2 d20s.

`!r 1d6+2`: roll 1d6, adding a bonus of 2.

And so on. It works similar to the Roll20 Dice Roll system.
