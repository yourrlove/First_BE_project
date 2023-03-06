const path = require('path');
const fs = require('fs');
const process = require('process');

function storePath (root_path, initial_path, new_path) {

    fs.writeFileSync('./reset_file/paths.txt', root_path);

    initial_path.forEach(file_path => {
        fs.appendFileSync('./reset_file/paths.txt', '\n' + file_path);
    });

    new_path.forEach(file_path => {
        fs.appendFileSync('./reset_file/paths.txt', '\n' + file_path);
    });
}

const input = process.argv.slice(2)[0];
if(input === 'reset') {
    resetFile();
}

function resetFile () {
    const data = fs.readFileSync('./reset_file/paths.txt', {encoding: 'utf-8', flag: 'r'}).split('\n');
    
    const len = (data.length - 1) / 2;
    for(let i = 1; i <= len; i++) {
        fs.renameSync(data[len + i], data[i]);
    }

    const root_path = (data[0].includes('./folder')) ? './folder' : './';
    const folders = fs.readdirSync(root_path);
    folders.forEach(folder => {
        const folder_path = path.resolve(root_path, folder);
        if(fs.statSync(folder_path).isDirectory()) {
            fs.rmSync(folder_path, {recursive: true});
        }
    });

}

module.exports = storePath;