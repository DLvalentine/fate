# fate
A dice roller bot for discord! 

### Startup
Requires [NodeJS](https://nodejs.org/).

This assumes you've allowed the bot access to your server. (WIP) - Not sure at the moment whether you'd need to make your own instance or if you can inherit the rules I have... I run this but locally, since I only use it biweekly during my own D&D/Pathfinder sessions.

Be sure to open `auth.json` and include the secret token that Discord will use to login as that bot. You can also include specific channels on your server in `channels.json` to be able to send messages strictly to a specificed channel.

1. clone/download repo
2. `cd` to directory
2.5 See above note for updating `auth.json` and (optionally) `channels.json`
3. `npm install`
4. `node fate.js` 

~ let fate decide ~

# Commands
`!help` : Print the commands.... y'know. This.

`!r [argument]` : Given a dice string, like `3d6`, roll a specified number of dice of a type. No need to include `1` for single die. You can add bonuses or penalties with `-` and `+` after the quantity/type string.

`!gr [argument]` : the same as `!r`, but will be whispered to the author for a "hidden" roll. Typically used for GMs


## Examples 
`!r d20`: roll 1 d20.

`!r 2d20`: roll 2 d20s.

`!r 1d6+2`: roll 1d6, adding a bonus of 2.

And so on.
