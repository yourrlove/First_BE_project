const path = require('path');
const fs = require('fs');
const create_folder = require('./create_folder');

const handle_name = (file_path) => {
    //get file name
    const filename = path.basename(file_path);

    //determine the folder name
    const folder_name = distribute(filename);

    //create folder -> move file -> return new path
    return create_folder(folder_name, file_path);
}

function distribute(filename) {
    const first_char = filename[0];
    
    if ('A' <= first_char && first_char <= 'D' || 'a' <= first_char && first_char <= 'd') {
        return "A-D";
    }

    if('E' <= first_char && first_char <= 'H' || 'e' <= first_char && first_char <= 'h') {
        return "E-H";
    }

    if('I' <= first_char && first_char <= 'L' || 'i' <= first_char && first_char <= 'l') {
        return "I-L";
    }

    if('M' <= first_char && first_char <= 'P' || 'm' <= first_char && first_char <= 'p') {
        return "M-P";
    }

    if('Q' <= first_char && first_char <= 'T' || 'q' <= first_char && first_char <= 't') {
        return "Q-T";
    }

    if('U' <= first_char && first_char <= 'X' || 'u' <= first_char && first_char <= 'x') {
        return "U-X";
    }

    if('Y' <= first_char && first_char <= 'Z' || 'y' <= first_char && first_char <= 'z') {
        return "Y-Z";
    }

    return first_char;
}


module.exports = handle_name;