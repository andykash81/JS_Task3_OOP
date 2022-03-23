let number = Math.floor(Math.random() * 100);
console.log(number);
let counter = 1;

game();

function game() {
    promise =  new Promise((resolve, reject) => {
        let readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`Попытка номер ${counter}. Введите число: `, (callback) => {
            resolve(callback);
            readline.close();
        });
    })
    promise.then(function(result) {
        if (result == number) {
            return console.log(`Вы угадали число ${number} с ${counter} попытки`);
        }
    });
    promise.then(function(result) {
        if (result < number) {
            console.log(`${result} меньше загаданного числа`);
            counter++;
            game();
        }
    });
    promise.then(function(result) {
        if (result > number) {
            console.log(`${result} больше загаданного числа`);
            counter++;
            game();
        }
    });
    promise.then(function(result) {
        if (isNaN(result)) {
            console.log(`${result} не является числом`);
            counter++;
            game();
        }
    });
}
