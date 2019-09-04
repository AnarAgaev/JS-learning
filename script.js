'use strict'

let box 		= document.getElementById('box'),				// получаем один элемент с уникальным ID
	btn 	    = document.getElementsByTagName('button'),		// получаем html коллекцию, доступ к элементу как к элементу массива
	heart 		= document.querySelectorAll('.heart'),			// получаем html коллекцию, доступ к элементу как к элементу массива
	circle 		= document.getElementsByClassName('circle'),	// получаем html коллекцию, доступ к элементу как к элементу массива
	firstHeart 	= document.querySelector('.heart'),				// получаем ОДИН - первый элемент удовлетворяющий данному селектору
	wrapper 	= document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i = 0; i < heart.length; i++) {
	heart[i].style.backgroundColor = 'gold';
}

heart.forEach(function (item, index, hearts) {
	item.style.backgroundColor = 'pink';
});

let div  = document.createElement('div'),
	text = document.createTextNode('Hello world!');

div.classList.add('gold-figure');

// document.body.appendChild(div);
// wrapper.appendChild(div);
// div.innerHTML = '<h2>Hello world!</h2>';
div.textContent = 'Hello world!';
div.textContent = text.wholeText;

document.body.insertBefore(div, circle[1]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[1]);

console.log(div);
console.log(typeof text);
