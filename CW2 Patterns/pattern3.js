const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Press a number : `, row => {
    row = parseInt(row);
    let space = row * 2 - 2;
    for (let i = 1; i <= row; i++) {
        let str = "";
        for (let j = 0; j < space; j++) {
            str += ' ';
        }
        for (let k = i; k >= 1; k--) {
            str += k + ' ';
        }

        console.log(str.trim());
        space -= 2;
    }
    space_sec = 2;
    for (let i = row - 1; i >= 1; i--) {
        let str = "";
        for (let j = 0; j < space_sec; j++) {
            str += ' ';
        }
        for (let k = i; k >= 1; k--) {
            str += k + ' ';
        }

        console.log(str.trim());
        space_sec += 2;
    }

    readline.close();
});
