'use strict'

let btnСalculate            = document.getElementById('start'),                     // Копка начать расчёт
    budget                  = document.querySelector('.budget-value'),              // Доход
    daybudget               = document.querySelector('.daybudget-value'),           // Бюджет на 1 день
    level                   = document.querySelector('.level-value'),               // Уровень дохода
    expenses                = document.querySelector('.expenses-value'),            // Обязательные расходы
    optionalexpenses        = document.querySelector('.optionalexpenses-value'),    // Возможные траты:
    income                  = document.querySelector('.income-value'),              // Дополнительный доход
    monthsavings            = document.querySelector('.monthsavings-value'),        // Накопления за 1 месяц
    yearsavings             = document.querySelector('.yearsavings-value'),         // Накопления за 1 год

    expensesItems           = document.querySelectorAll('.expenses-item'),          // Поля ввода для обязательных расходов
    optionalExpensesItems   = document.querySelectorAll('.optionalexpenses-item'),  // Поля ввода для НЕ обязательных расходов
    
    btnAffirExpenses        = document.getElementsByTagName('button')[0],           // Кнопка утвердить обязательные расходы
    btnAffirOptionExpenses  = document.getElementsByTagName('button')[1],           // Кнопка уствердить дополнительные расходы
    btnCalculateDayBudget   = document.getElementsByTagName('button')[2],           // Кнопка рассчитать дневной бюджет

    chooseIncomeInput       = document.querySelector('#income'),                    // Поле ввода статьи возможного дохода
    savingsInput            = document.querySelector('#savings'),                   // Чекбокс есть ли накопления
    sumInput                = document.querySelector('#sum'),                       // Поле ввода сумма
    percentInput            = document.querySelector('#percent'),                   // Поле ввода процент

    yearValueInput          = document.querySelector('.year-value'),                // Поле ввода год
    monthValueInput         = document.querySelector('.month-value'),               // Поле ввода месяц
    dayValueInput           = document.querySelector('.day-value');                 // Поле ввода день

console.log(btnСalculate);
console.log(budget);
console.log(daybudget);
console.log(level);
console.log(expenses);
console.log(optionalexpenses);
console.log(income);
console.log(monthsavings);
console.log(yearsavings);
console.log(expensesItems);
console.log(optionalExpensesItems);
console.log(btnAffirExpenses);
console.log(btnAffirOptionExpenses);
console.log(btnCalculateDayBudget);
console.log(chooseIncomeInput);
console.log(savingsInput);
console.log(sumInput);
console.log(percentInput);
console.log(yearValueInput);
console.log(monthValueInput);
console.log(dayValueInput);