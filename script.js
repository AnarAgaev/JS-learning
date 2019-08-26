'use strict';

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;    
// }

// do {
//     console.log(num);
//     num++;    
// } while (num < 55)


// Вывести все чётные числа от 0 до 10 кроме самого 10
for (let i = 1; i < 100; i++) {
    if (i % 2 != 0) {
        continue;
    }
    if (i == 10) {
        break;
    }
    console.log(i);
}