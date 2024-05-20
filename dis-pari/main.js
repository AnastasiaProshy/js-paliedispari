'use strict';

const userNumber = parseInt(prompt('Inserisce un numero da 1 a 5'));
console.log(userNumber);

let random5 = Math.floor(Math.random() * 5) + 1;
console.log(random5);

if (Sum(userNumber, random5) % 2 === 0) {
    console.log('Hai vinto!');
}

else {
    console.log('Non hai vinto')
}

function Sum(a = userNumber, b = random5) {
    return a + b;
}