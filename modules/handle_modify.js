const fs = require('fs');
const path = require('path');
const create_folder = require('./create_folder');

const handle_modify = (file_path) => {
    const fileTime = fs.statSync(file_path).birthtime;
    const folder_name = check(fileTime); 

    //create folder -> move file -> return new path
    return create_folder(folder_name, file_path);
};

function check(fileTime) {

    let currentTime = new Date();
    let name = "Last year";

    //check year
    if(fileTime.getFullYear() === currentTime.getFullYear()) {
        name = "This year";
    } else {
        return name;
    }

    //check month
    if(fileTime.getMonth() === currentTime.getMonth()) {
        name = "This month";
    } else if(currentTime.getMonth() - fileTime.getMonth() === 1){
        return "Last month";
    } else {
        return name;
    }

    //check week
    const day_of_week = currentTime.getDate() - currentTime.getDay();
    if(fileTime.getDate() >= day_of_week) {
        name = "This week";
    } else if(fileTime.getDate() + 6 >= day_of_week){
        name = "Last week";
    } else {
        return name;
    }

    //check day
    if(fileTime.getDay() === currentTime.getDay()) {
        name = "Today";
    } else if(currentTime.getDay() - fileTime.getDay() === 1){
        name = "Yesterday";
    } else {
        return name;
    } 
    
    return name;
}

module.exports = handle_modify;