const _ = require('lodash');
const {eval} = require('mathjs'); // fixme: figure out how to stack bonuses and penalties

/**
 * Roll di(c)e, and return formatted string(s) containing data about the roll(s)
 * @param formattedArg {Object} - contains information about the dice from the argument string
 * @param author {String} - the author to highlight when returning the data.
 * @return {String} - formatted message
 */
roll = (formattedArg, author = 'You') => {
    const rolls = new Array(formattedArg.quantity).fill(0);
    const isD10 = formattedArg.type === 10;
    let total = 0;
    
    rolls.forEach((val, index) => {
        if (isD10) {
            // D10 is a percent die
            rolls[index] = _.random(0, 9);
        } else {
            rolls[index] = _.random(1, formattedArg.type);
        }
    });

    total = rolls.reduce((r, v) => r+=v) - formattedArg.penalty + formattedArg.bonus;

    let returnMessages = [
        `\`${author}\` **rolled**: ${formattedArg.quantity}d${formattedArg.type}`,
        `Your roll had a **penalty** of ${formattedArg.penalty}\nYour roll had a **bonus** of ${formattedArg.bonus}`,
        `**Rolls**: [ ${rolls.join(', ')} ] ${formattedArg.penalty ? `- ${formattedArg.penalty}` : ''} ${formattedArg.bonus ? `+ ${formattedArg.bonus}` : ''}`,
        `**Total**: ${total}`
    ];
    if (!formattedArg.penalty && !formattedArg.bonus) { 
         _.remove(returnMessages, (value, index) => {
                return index === 1;
            });
    }

    return(returnMessages.join('\n\n'));
};

/**
 * Format user input from dice string into object for rolling
 * @param argument {String} - a dice string formatted with [quantity]d[type][+bonuses or -penalties]
 * @return {Object} - containing data about the roll
 */
format = argument => {
    let arg = argument.toLowerCase().replace(/\s/g, ''); // Just ensure that whitespace is replaced, since it is cheap.
    if ( arg[0] === 'd' ) arg = '1' + arg; // to make life easier, prepend 1 when no quantity provided
    let splitArgs = arg.split('d');

    return {
        quantity: parseInt(splitArgs[0], 10),
        type: parseInt(splitArgs[1].split(/[+-]/g)[0], 10) || 0,
        penalty: parseInt(splitArgs[1].split(/[-]/g)[1], 10) || 0,
        bonus: parseInt(splitArgs[1].split(/[+]/g)[1], 10) || 0,
    };
}


module.exports = {
    roll,
    format
};
