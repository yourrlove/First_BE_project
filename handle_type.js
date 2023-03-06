const fs = require('fs');
const path = require('path');
const create_folder = require('./create_folder');

const default_type = {
    '.png': 'image',
    '.jpg': 'image',
    '.txt': 'text',
    '.sh': 'bash'
};

const handle_type = (file_path) => {
    //check if file type is in default type or other
    const type = type_name(path.extname(file_path)); 

    //create folder -> move file -> return new path
    return create_folder(type, file_path);
}

//filter out types has in input
function construct_input_type(categorized_type) {
    temp = {};
    for(const key in default_type) {
        if(categorized_type.includes(default_type[key])) {
            temp[key] = default_type[key];
        }
    }
    return temp;
}

//check if this file type has in file types which can be distribute
function type_name (file_type) {
    for(const type in default_type) {
        if(file_type === type) {
            return default_type[type];
        }
    }
    return "other";
}

//check if this file type has in file types input which is need to be distribute
const check_type = (file_type, categorized_type) =>{
    const input_type = construct_input_type(categorized_type);
    for(const type in input_type) {
        if(file_type === type) {
            return true;
        }
    }
    return false;
}


module.exports = {
    handle_type,
    check_type
};