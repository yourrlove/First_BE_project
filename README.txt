# First_BE_project
The command have structure: <path file or folder> <optional> <path folder>
For example: ./ --type --size --name ./test
<path file or folder>: you type path file to handing or you type path folder, you handing all file in that (except file system).
<optional>: you type optional to handing file, you can type only less than 3 optional.
    The Optional command have:
        --type: Handing in file type, this have 4 types: image, bash, text, other.
               You can type separate types, for example: --type="image,bash".
        --size: Handing in file size, this have this types: Verybig(>10M), Big(5-10M), Medium(1-5M), Small(100KB -> 1M), Tiny(<100KB).
        --Modify: Handing in file time to modify, this have this types: Today, This week, This month, this year.
        --name: Handing in file name, this have this types: A-D, E-M, ... W-Y.
<path folder>: you enter the path folder to transfer the entire file after processing to that folder (except first command is folder, you can you can type nothing in here).
for some example command:

    ./ --type="image" --size --name ./test // all file have type "image" in folder path './' handing with command --type, --size, --name, copy that file to BackUpFolder and handing

    ./test.sh --size ./

    ./ --modify

    ./ --name --type="other" ./project
