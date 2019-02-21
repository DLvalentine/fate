const _ = require('lodash');

/**
 * todo: docs
 */
roll = formattedArg => {
    const rolls = new Array(formattedArg.quantity).fill(0);
    const isD10 = formattedArg.type === 10;
    let total = 0;
    
    rolls.forEach((val, index) => {
        if(isD10) {
            // D10 is a percent die
            rolls[index] = _.random(0, 100);
        } else {
            rolls[index] = _.random(1, formattedArg.type);
        }
    });

    total = rolls.reduce((r, v) => r+=v) - formattedArg.penalty + formattedArg.bonus;

    let returnMessages = [
        `You **rolled**: ${formattedArg.quantity}d${formattedArg.type}`,
        `Your roll had a **penalty** of ${formattedArg.penalty} and a **bonus** of ${formattedArg.bonus}`,
        `**Rolls**: [${rolls.join(', ')}]`,
        `**Total**: ${total}`
    ];
    if(!formattedArg.penalty && !formattedArg.bonus) { 
         _.remove(returnMessages, (value, index) => {
                return index === 1;
            });
    }

    return(returnMessages.join('\n\n'));
};

/**
 * todo: docs
 * argument type: d20, 2d20. 2d20-10+5 [variants]
 */
format = argument => {
    let arg = argument.toLowerCase();
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
