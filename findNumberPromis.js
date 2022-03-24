let number = Math.floor(Math.random() * 100);
console.log(number);
let counter = 1;
let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

game();

function game() {
    new Promise((resolve, reject) => {
        readline.question(`Попытка номер ${counter}. Введите число: `, (callback) => {
            resolve(callback);
        });

    }).then((result) => {
        play(result);
    })
}
function play(result) {
            if (isNaN(result)) {
                console.log(`${result} не является числом`);
                counter++;
                return game();
            }
            else if (result == number) {
                readline.close();
                return console.log(`Вы угадали число ${number} с ${counter} попытки`);
            }
            else if (result < number) {
                console.log(`${result} меньше загаданного числа`);
                counter++;
                return game();

            }
            else if (result > number) {
                console.log(`${result} больше загаданного числа`);
                counter++;
                return game();
            }
}
