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
    dayValueInput = document.querySelector('.day-value'),                           // Поле ввода день
    
    money, time,
    appData = {
        budget: money,
        expenses: {},
        optionlExpenses: {},
        income: [],
        timeData: time,
        savings: false,
    };

btnСalculate.addEventListener('click', function () {

    time = prompt('Введите дату в формате YYYYY-MM-DD', '');

    do {
        money = +prompt('Ваш бюджет на месяц?', '');
    } while (isNaN(money) || money == '' || money == null);

    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed(2);

    // Записываем дату
    yearValueInput.value = new Date( Date.parse(time) ).getFullYear();
    monthValueInput.value = new Date( Date.parse(time) ).getMonth() + 1;
    dayValueInput.value = new Date( Date.parse(time) ).getDate();

    btnAffirExpenses.removeAttribute('disabled');
    btnAffirOptionExpenses.removeAttribute('disabled');
    btnCalculateDayBudget.removeAttribute('disabled');
});

btnAffirExpenses.addEventListener('click', function() {

    let sum = 0,
        dataVerify = false;

    for (let i = 0; i < expensesItems.length; i++) {
        
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;

        if ( a != '' && b != '' && !isNaN(b) ) {
            appData.expenses[a] = b;
            sum += +b; 
            dataVerify = true;
        } 
   }

    if (dataVerify) {
        btnAffirExpenses.classList.remove('disabled');
        expenses.textContent = sum;
    } else {
        btnAffirExpenses.classList.add('disabled');
        expenses.textContent = '';
    }
});

btnAffirOptionExpenses.addEventListener('click', function() {

    for (let i = 0; i < optionalExpensesItems.length; i++) {
        
        let opt = optionalExpensesItems[i].value;
        appData.optionlExpenses[i] = opt;
        
        optionalexpenses.textContent += appData.optionlExpenses[i] + ' ';
    }
});

btnCalculateDayBudget.addEventListener('click', function() {

    if (appData.budget != undefined) {

        let expensesSum = 0;

        for (let key in appData.expenses) {
            expensesSum += +appData.expenses[key];
        }

        appData.maneyPreDay = +( (appData.budget - expensesSum) / 30 ).toFixed(2);
        daybudget.textContent = appData.maneyPreDay;
    
        if (appData.maneyPreDay < 100) {
            level.textContent = 'Минимальный уровнь достатка!';
        } else if (appData.maneyPreDay > 100 && appData.maneyPreDay < 2000) {
            level.textContent = 'Средний уровнь достатка.';
        } else if (appData.maneyPreDay > 2000) {
            level.textContent = 'Высокий уровнь достатка.';
        } else {
            level.textContent = 'Произошла ошибка!';
        }
    } else {
        daybudget.textContent = 'Произошла ошибка!';
    }
});

chooseIncomeInput.addEventListener('input', function() {

    let items = chooseIncomeInput.value;
    appData.income = items.split(', ');

    income.textContent = appData.income;
});

savingsInput.addEventListener('click', function() {

    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumInput.addEventListener('input', function() {

    if (appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentInput.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});

percentInput.addEventListener('input', function() {

    if (appData.savings == true) {
        if (appData.savings == true) {
            let sum = +sumInput.value,
                percent = +percentInput.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);
        }
    }
});