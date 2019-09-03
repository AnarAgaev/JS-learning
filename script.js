'use strict'

let box 		= document.getElementById('box'),				// получаем один элемент с уникальным ID
	buttons 	= document.getElementsByTagName('button'),		// получаем html коллекцию, доступ к элементу как к элементу массива
	circle 		= document.getElementsByClassName('circle'),	// получаем html коллекцию, доступ к элементу как к элементу массива
	hearts 		= document.querySelectorAll('.heart'),			// получаем html коллекцию, доступ к элементу как к элементу массива
	firstHeart 	= document.querySelector('.heart');				// получаем ОДИН - первый элемент удовлетворяющий данному селектору

console.log(box);
console.log(buttons);
console.log(buttons[0]);
console.log(circle[2]);
console.log(hearts);
console.log(firstHeart);