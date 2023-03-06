const fs = require('fs');
const path = require('path');
const distribute_type = require('./handle_type');
const handle_name = require('./handle_name');
const handle_size = require('./handle_size');
const handle_modify = require('./handle_modify');
const storePath = require('./reset');

let initial_path = [];
let new_path = [];


const handle = (command) => {

    //check if file or folder
    if(fs.lstatSync(command['_'][0]).isFile()) {
        classify(command, Object.keys(command), command['_'][0]);
    } 
    else {
        const files = fs.readdirSync(command['_'][0]);

        for(let file of files) {
            const f_path = path.resolve(command['_'][0],file);
            //check if this path is file or folder
            if(fs.lstatSync(f_path).isFile()) {
                //if input type includes specific types
                if(typeof command['type'] === 'string' && !distribute_type.check_type(path.extname(f_path), command['type'])) {
                    continue;
                }
                classify(command, Object.keys(command), f_path);
            }
        }
    }

    //store paths
    storePath(command['_'][0], initial_path, new_path);
}

//file classification
function classify(command, option, file_path) {

    initial_path.push(file_path);
    const len = option.length - 1;
    for(let i = 1; i <= len; i++) {

        switch(option[i]) {

            case 'type':
                file_path = distribute_type.handle_type(file_path);
                break;
                
            case 'name':
                file_path = handle_name(file_path);
                break;

            case 'modify':
                file_path = handle_modify(file_path);
                break;
                
            case 'size':
                file_path = handle_size(file_path);          
                break;
        }
    }

    new_path.push(file_path);

}

module.exports = handle;




