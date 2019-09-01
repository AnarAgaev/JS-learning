'use strict'

let money, time;

// Футнкция инициализации
function start() {
    do {
        money = +prompt('Ваш бюджет на месяц?', '');
    } while (isNaN(money) || money == '' || money == null);
    
    time = prompt('Введите дату в формате YYYYY-MM-DD', '');
}
start();

let appData = {
        budget: money,
        expenses: {},
        optionlExpenses: {},
        income: [],
        timeData: time,
        savings: true,
        chooseExpensen: function() { // Добавляем статьи расходов
    	    for (let i = 0; i < 2; i++) {
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
		},
		detectDayBudget: function() { // Расчёт ежедневного бюжета
		    appData.maneyPreDay = +(appData.budget / 30).toFixed(2);
		    console.log('Ежедневный бюджет: ' + appData.maneyPreDay);
		},
		detectLevel: function() { // Расчёт уровня дохода
		    if (appData.maneyPreDay < 100) {
		        console.log('Минимальный уровень достатка.');
		    } else if (appData.maneyPreDay > 100 && appData.maneyPreDay < 2000) {
		        console.log('Средний уровень достатка.');
		    } else if (appData.maneyPreDay > 2000) {
		        console.log('Высокий уровень достатка.');
		    } else {
		        console.log('Произошла ошибка');
		    }
		},
		checkSavings: function() { // Расчитываем ежемесячный доход с накоплений
		    if (appData.savings) {
		        let save = +prompt('Какова сумма накоплений', ''),
		            percent = +prompt('Под какой процент', '');

		        appData.monthIncome = save / 100 / 12 * percent;
		        console.log('Доход в месяц с Вашего депозита ' + appData.monthIncome + ' р.');
		    }
		},
		chooseOptExpenses: function() { // Получаем необязательные расходы
		    for (let i = 0; i < 3; i++) {
		        let numState = i + 1;
		        appData.optionlExpenses[`${numState}`] = prompt('Статья необязательных расходов?', '');        
		    }
		},
		chooseIncome: function() {
			let items = prompt('Что принесёт дополнительный доход? (перечислите через запятую)', '');

			if (typeof items === 'string' && typeof items != null && items != '') {
	            appData.income = items.split(', ');
	        } else {
	        	console.log('Entered data is incorrect!');
	        }
			appData.income.sort();

			console.log('Способы доп. заработка: ');
			appData.income.forEach(function(item, i) {
				console.log((i + 1) + ': ' + item);
			});
		},
    };

    console.log('Наша программа включает в себя данные:');
    for (let key in appData) {

    	if (typeof appData[key] != 'function') {
	    	console.log(key + ': ' + appData[key]);
    	}
    }