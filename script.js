'use strict'

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }
// showFirstMessage('Hello world!');
// console.log(num);

// let calc = function calc(a, b) {
//     return a + b;
// }

// Пример стрелочной функции
// let calc = (a,b) => a + b;
// console.log(calc(3, 4));
// console.log(calc(8, 4));
// function retVar() {
//     let num = 50;
//     return num;
// }
// let anotherNum = retVar();
// console.log(anotherNum);

// let str = 'test';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// let twelve = '12.2px';
// console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// let str = 'quote: "... Yes, i am..."';
// console.log(str);

let calc = (a, b) => a + b;
console.log(`1 + 2 = ${calc(1, 2)}.`);

let guestList = `Guests:
    * John
    * Pete
    * Mary`;
console.log(guestList);

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList2);

console.log("\u00A9");

// Длинные юникодные коды
// 佫, редкий китайский иероглиф
console.log("\u{20331}");
// 😍, лицо с улыбкой и глазами в форме сердец
console.log("\u{1F60D}");