const fs = require('fs');
const path = require('path');


const create = (folder_name, file_path) => {
    //create folder path 
    const dir_path = path.parse(file_path)['dir'];
    const folder_path = path.join(dir_path, folder_name);    

    //create folder
    fs.mkdirSync(folder_path, {recursive : true});
    
    //move file into that folder
    const new_path = path.join(folder_path, path.basename(file_path));
    fs.renameSync(path.join(file_path), new_path);
    
    //return new file path
    return new_path;
}

module.exports = create;