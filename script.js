'use strict';

let message = {
		loading: 'Loading...',
		failure: 'Something went wrong :( ...',
	},
	inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {

	// request.open(method, URL, [async, user, password])
	// status - содержит http код ответа серевера 404, 200 и др.
	// statusText - тектсовый описание ответа от сервера OK ли NOT FOUND
	// responseText или просто response - текст ответа сервера (именно эти данныхе возвращаются в Ajax запрос от сервера)
	// readyState - текущее состояне запроса от 0 до 5 https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

	function getExchangeRates() {
		return new Promise((resolve, reject) => {
			var request = new XMLHttpRequest();
			request.open('GET', 'current.json', true);
			request.addEventListener('load', () => {
				if (request.readyState === 4 && request.status == 200) resolve(request.response);
				else reject();
			});
			request.send();
		});
	}

	getExchangeRates()
		.then((data) => {
			inputUsd.value = message.loading;
			return data;
		})
		.then((data) => {
			setTimeout(() => {
				let exchangeRate = JSON.parse(data);
				inputUsd.value = inputRub.value / exchangeRate.usd;  
			}, 300);
		})
		.catch(() => inputUsd.value = message.failure);
});