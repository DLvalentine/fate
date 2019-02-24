# fate
A dice roller bot for discord! 

### Startup
Requires [NodeJS](https://nodejs.org/).

This assumes you've allowed the bot access to your server. [Click here to do that.](https://discordapp.com/api/oauth2/authorize?client_id=548192715129749544&permissions=7168&scope=bot)

I don't plan to run this remotely, since I only use it when I'm running D&D or Pathfinder sessions. So as long as the bot has perms, you should be able to spin up a local instance.

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


## Examples 
`!r d20`: roll 1 d20.

`!r 2d20`: roll 2 d20s.

`!r 1d6+2`: roll 1d6, adding a bonus of 2.

And so on.
