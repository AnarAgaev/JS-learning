'use strict'

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Выберите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};

// for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдётся?', '');
    
    if (typeof a === 'string' && 
        typeof a != null && 
        typeof b != null && 
        a != '' && 
        b != '' && 
        a.length < 50) {
        appData.expenses[a] = b;
    } else {
        console.log('Not done');
        
    }
}

// Та же логика но с использование цикла While
// let i = 0;
// while (i < 2) {

//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдётся?', '');

//     if (typeof a === 'string' &&
//         typeof a != null &&
//         typeof b != null &&
//         a != '' &&
//         b != '' &&
//         a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         console.log('Not done');
//     }
//     i++;
// }

// Та же логика но с использование цикла While
// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдётся?', '');

//     if (typeof a === 'string' &&
//         typeof a != null &&
//         typeof b != null &&
//         a != '' &&
//         b != '' &&
//         a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         console.log('Not done');

//     }
//     i++;
// } while (i < 2);

appData.maneyPreDay = appData.budget / 30;

console.log('Ежедневный бюджет: ' + appData.maneyPreDay);

if (appData.maneyPreDay < 100) {
    console.log('Минимальный уровень достатка.');    
} else if (appData.maneyPreDay > 100 && appData.maneyPreDay < 2000) {
    console.log('Средний уровень достатка.');
} else if (appData.maneyPreDay > 2000) {
    console.log('Высокий уровень достатка.');
} else {
    console.log('Произошла ошибка');    
}