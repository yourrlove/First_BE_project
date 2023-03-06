const process = require('process');
const yargs = require('yargs');
const check_input = require('./check_input');
const handle_input = require('./handle_input');


//get input as an object
let command = process.argv.slice(2);
if(check_input.check_optional_input_repeat(command)) {
    command = yargs(process.argv.slice(2)).argv;
    if (check_input.check(command)) {
        handle_input(command);
    }
}

