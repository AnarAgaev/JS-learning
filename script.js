'use strict'

let btn = document.querySelectorAll('button'),
	wrap = document.querySelector('.wrapper'),
	link = document.querySelector('a');

// btn[0].onclick = function () {
// 	console.log('asdf');
// };

// btn[0].onclick = function () {
// 	console.log('Hello world!');
// };

// btn[0].addEventListener('click', function() {
// 	console.log('Push button one');
// });

// btn[0].addEventListener('click', function() {
// 	console.log('Push button one too');
// });

// btn[0].addEventListener('mouseenter', function() {
// 	console.log('Mouse under first button.');
// });

btn[0].addEventListener('click', function (event) {
	let target = event.target;

	event.stopPropagation();
	// target.style.display = 'none';

	console.log('There is event: ' + event.type + ' on element: ' + event.target);
	// console.log(target);
	// console.log(event);
});

wrap.addEventListener('click', function (event) {
	console.log('There is event: ' + event.type + ' on element: ' + event.target);
});

link.addEventListener('click', function (evt) {
	evt.preventDefault();
	console.log('There is event: ' + event.type + ' on element: ' + event.target);
});

btn.forEach(function (item) {
	item.addEventListener('mouseleave', function(event){
		console.log('Go away.');
	});
});
