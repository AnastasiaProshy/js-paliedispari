'use strict';

const word = prompt('Iserisci una parola:');

if (word == invertiStringa(word)) {
    console.log('La stringa - palindroma');
}
else {
    console.log('La stringa non palindroma');
}

function invertiStringa(str) {
    let arrayDiCaratteri = str.split('');
    let arrayInvertito = arrayDiCaratteri.reverse();
    let stringaInvertita = arrayInvertito.join('');
    return stringaInvertita;
}