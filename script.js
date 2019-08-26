'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    appData = { 
        budjet: money,          // бюджет на месяц
        timeData: time,         // дата
        expenses: {},           // объект с обязательными расходами
        optionalExpenses: {},   // объект с дополнительными расходами
        income: [],
        savings: false,
    };

for (let i = 0; i < 2; i++) {

    let state = prompt('Введите обязательную статью расходов в этом месяце', ''),
        number = prompt('Во сколько обойдется?', '');
    
    appData.expenses[state] = number;
}

/** Функция расчёта бюджета на один день.
Алгоритм расчёта:
    из месячного бюджета вычитаем обязательные расходы, 
    оставшуюся сумму делим на 30 (дней в месяце).*/

function getBudget() {
    let expensesAmount = 0;
    
    for (let key in appData.expenses) {
        
        expensesAmount += +appData.expenses[key];
    }
    
    return (appData.budjet - expensesAmount) / 30;
}

if ( isNaN(getBudget()) ) {
    document.getElementById('budget').innerHTML = 'Введены не корректные данные!';
} else {
    document.getElementById('budget').innerHTML = 'Бюджет на один день: ' + getBudget().toFixed(2) + ' р.';
}

console.log(appData);
