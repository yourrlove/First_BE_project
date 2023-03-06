const fs = require('fs');
const path = require('path');
const create_folder = require('./create_folder');

const handle_size = (file_path) => {

    let folder_name = "";
    let file_size = fs.statSync(file_path).size;
    const bytes = 1024;
    
    if(file_size >= bytes * bytes) {
        file_size = Math.floor(file_size / (bytes * bytes));
        folder_name = MB(file_size);
    } else {
        file_size = Math.floor(file_size / bytes);
        folder_name = KB(file_size);
    }

    //create folder -> move file -> return new path
    return create_folder(folder_name, file_path);
}

//handle_size(file_path);

function MB (file_size) {
    
    if(file_size > 10) {
        return "Verybig";
    }

    if(file_size >= 5) {
        return "Big";
    }

    return "Medium";    
}

function KB (file_size) {
    
    if(file_size > 100) {
        return "Small";
    }

    return "Tiny";
}

module.exports = handle_size;