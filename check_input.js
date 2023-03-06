const fs = require('fs');
const { boolean } = require('yargs');

const check = (command) => {

    //check required input
    if(!command['_'][0].includes('./')) {
        console.log('\nWRONG! Missing or incorrected required input\n');
        return false;
    }
    
    //check file or folder is exist?
    if(!fs.existsSync(command['_'][0])) {
        console.log('\nWRONG! File/Folder does not exist\n');
        return false;
    }

    let flag = true;
    //check if file or folder
    if(fs.lstatSync(command['_'][0]).isFile()) {
        flag = file_conditions(command);
    } else {
        flag = folder_conditions(command);
    }    

    return flag;
}


function file_conditions (command) {
    //check number of optional
    if (num_para != 2) {
        console.log('\nWRONG! Requires/Only one optional input\n');
        return false;
    }

    if(typeof Object.values(command)[1] === 'string') {
        console.log('\nWrong! --type input should not include another arguments');
        return false;
    }
    return true;
}

function folder_conditions (command) {
    //check number of optional    
    const num_para = Object.keys(command).length - 1;
    if(num_para > 4) {
        console.log('\nWRONG! Exceed maximum number of optional inputs\n');
        return false;
    } else if(num_para === 1) {
        console.log('\nWRONG! Missing optional inputs\n');
        return false;
    }

    //check optional input
    const opt_input = Object.keys(command).slice(1, num_para);
    for(let x of opt_input) {
        if(command['_'].length > 1 || x != 'type' && x != 'name' && x != 'modify' && x != 'size') {
            console.log('\nWRONG! Optional input is incorrect\n');
            return false;
        }
        if(typeof command[x] != 'boolean' && (x === 'name' || x === 'modify' || x === 'size')) {
            console.log('\nWrong! --' + x + ' input should not include another arguments');
            return false;
        }
    }
    return true;
}

const check_optional_input_repeat = (command) => {
    const input = {
        '--type': false,
        '--name': false,
        '--size': false,
        '--modify': false
    };

    for(let x of command) {
        if(typeof input[x] != 'undefined') {
            if (input[x] === true) {
                console.log('WRONG! ' + x + ' is repeated!');
                return false;
            }
            input[x] = true;
        } 
    }
    return true;
}

module.exports = {
    'check': check,
    'check_optional_input_repeat': check_optional_input_repeat
}

