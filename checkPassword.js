function getPasswordChecker(rightPassword) {
    return function (password) {
        if (rightPassword == password) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }
}

let check1 = getPasswordChecker('worms');
console.log(check1('words'));
console.log(check1('www'));
console.log(check1('worms'));

