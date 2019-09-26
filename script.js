'use strict'

let drink = true;

function shoot() {
	console.log('Вы сделали выстрел...');

	return new Promise((resolve, reject) => {
		setTimeout(function () {
			Math.random() > .5 ? resolve() : reject('Вы промахнулись!');
		}, 1000);
	});
}

shoot()
	.then(() => console.log('Вы попали в цель'))
	.then(() => console.log('Вы победили!'))
	.then(() => drink ? buyBeer() : giveMoney())
	.catch((mess) => console.log(mess + ' Вы проиграли!'))
	.finally(() => console.log('Игра завершена.'));

function buyBeer() {
	console.log('Вам купили пиво.');
}

function giveMoney() {
	console.log('Вам дали денги.');
}