'use strict';

let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {
	let request = new XMLHttpRequest();

	// request.open(method, URL, [async, user, password])
	request.open('GET', 'current.json');
	request.setRequestHeader('Content-type', 'application/json: charset= utf-8');
	request.send();

	// status - содержит http код ответа серевера 404, 200 и др.
	// statusText - тектсовый описание ответа от сервера OK ли NOT FOUND
	// responseText или просто response - текст ответа сервера (именно эти данныхе возвращаются в Ajax запрос от сервера)
	// readyState - текущее состояне запроса от 0 до 5 https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState
	
	request.addEventListener('readystatechange', function() {
		if (request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);
			inputUsd.value = inputRub.value / data.usd;  
		} else {
			inputUsd.value = 'Что-то пошло не так :('
		}
	});
});


// 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();
// // 2. Настраиваем его: GET-запрос по URL /article/.../load
// xhr.open('GET', 'js/current.json');
// // 3. Отсылаем запрос
// xhr.send();
// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function () {
// 	if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
// 		console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
// 	} else { // если всё прошло гладко, выводим результат
// 		console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
// 	}
// };
// xhr.onprogress = function (event) {
// 	if (event.lengthComputable) {
// 		console.log(`Получено ${event.loaded} из ${event.total} байт`);
// 	} else {
// 		console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
// 	}
// };
// xhr.onerror = function () {
// 	console.log("Запрос не удался");
// };

// Тоже самое на JQuery
// $.ajax({
// 	type: "GET",
// 	cache: false,
// 	url: "js/current.json",
// 	success: function (data) {
// 		console.log(data);
// 	}
// });
