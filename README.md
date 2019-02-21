# fate
A dice roller bot for discord! 

### Startup
Requires NodeJS.

1. clone/download repo
2. `cd` to directory
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
