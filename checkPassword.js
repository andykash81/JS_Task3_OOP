function getPasswordChecker(password) {
    return function () {
        const rightPassword = 'worms';
        if (rightPassword == password) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }
}

const check1 = getPasswordChecker('words');
console.log(check1());
const check2 = getPasswordChecker('wolk');
console.log(check2());
const check3 = getPasswordChecker('worms');
console.log(check3());

