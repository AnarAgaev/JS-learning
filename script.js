'use strict';

// Made variable
let num = 50;

// Сonditional operator
if(num < 49) {
    console.log('Not true');
} else if (num > 100) {
    console.log('It\'s a lot of');
} else {
    console.log('True');
}

// Ternary operator
(num == 50) ? console.log('True') : console.log('Not true');


// Switch
switch (num) {
    case num < 49:
        console.log('Not true');
        break;
    case num > 100:
        console.log('It\'s a lot of');
        break;
    case 50:
        console.log('Bingo');
        break;
    default:
        console.log('True');
        break;
}