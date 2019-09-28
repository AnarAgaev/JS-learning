'use strict';

// localStorage.setItem('number', 1);				// Разместить данные в localstorage
// localStorage.setItem('hello', 'Hello world!'); 	
// console.log(localStorage.getItem('number'));		// Получить данные из localstorage
// localStorage.removeItem('number');				// Удалить данные из localstorage
// localStorage.clear();							// Стереть весь localstorage


window.addEventListener('DOMContentLoaded', () => {

	let checbox = document.getElementById('rememberMe'),
		checker = document.getElementById('checker'),
		change = document.getElementById('change'),
		form = document.getElementById('login'),
		person = {
			name: 'Smith',
			age: 25,
			tech: ['cell phone', 'laptop']
		},
		serializedPerosn = JSON.stringify(person);

	if (localStorage.getItem('isChecked') == 'true') {
		checker.checked = true;
	}

	if (localStorage.getItem('bg') == 'changed') {
		form.style.backgroundColor = '#ff4756';
	}

	checbox.addEventListener('click', () => {
		localStorage.setItem('isChecked', true);
	});

	change.addEventListener('click', () => {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = '#ff4756';
	});

	localStorage.setItem('user', serializedPerosn);
	console.log(JSON.parse(localStorage.getItem('user')));

});