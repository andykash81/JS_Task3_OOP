let number = Math.floor(Math.random() * 100);
let counter = 1;
game();
function game() {
    let readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return readline.question(`Попытка номер ${counter}. Введите число: `, (callback) => {
        readline.close();
        if (callback == number) {
            return console.log(`Вы угадали число ${number} с ${counter} попытки.`);
             
        }
        else if (isNaN(callback)) {
            console.log(`${callback} не является числом.`);
            counter++;
            game();
        }
        else if (callback < number) {
            console.log(`${callback} меньше загаданного числа.`);
            counter++;
            game();
        }
        else if (callback > number) {
            console.log(`${callback} больше загаданного числа.`);
            counter++;
            game();
        }
    });
}
