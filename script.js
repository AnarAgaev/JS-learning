'use strict'

// let timedId = setTimeout(sayHello, 3000);
// clearTimeout(timedId);

// let timedId = setInterval(sayHello, 3000);
// clearTimeout(timedId);

// function sayHello() {
// 	console.log('Hello world!');
// }

// let timerId = setTimeout(function log() {
// 	console.log("Hello");
// 	setTimeout(log , 2000);
// });

let button = document.getElementsByTagName('button'),
	element = document.querySelector('.box'),
	btnBlock = document.querySelector('.btn-block'),
	buttons = document.querySelectorAll('.btn-block button');


function animation () {
	let position = 0,
		id = setInterval( frame, 10 );

	function frame () {
		if ( position == 400 ) {
			clearInterval( id );
		} else {
			position++;
			element.style.top = position + 'px';
			element.style.left = position + 'px';
		}
	}
}

button[0].addEventListener( 'click', animation );

// btnBlock.addEventListener('click',  (event) => {
// 	if ( event.target && event.target.tagName == 'BUTTON' ) {
// 		console.log(event.target.tagName);		
// 	}
// } );

// btnBlock.addEventListener('click', (event) => {
// 	if ( event.target && event.target.classList.contains('first') ) {
// 		console.log(event.target.tagName);
// 		console.log(event.target);
// 	}
// });

btnBlock.addEventListener('click', (event) => {
	if ( event.target && event.target.matches('button.first') ) {
		
		console.log(event.target.tagName);
		
		console.log(event.target);

	}
});


