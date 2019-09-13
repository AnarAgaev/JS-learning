'use strict'

let box = document.querySelector('.box'),
	btn = document.querySelector('button'),
	width = box.clientWidth,
	height = box.clientHeight;


console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

// btn.addEventListener('click', () => {
// 	box.style.height = box.scrollHeight + 'px';
// });
	
// btn.addEventListener('click', () => {
// 	console.log(box.scrollTop);
// });
	
// btn.addEventListener('click', () => {
// 	box.scrollTop = 0;
// });


scrollBy(0, 200);
scrollTo(0, 200);



// let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
// 	V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

// for (let i = 0; i < linkNav.length; i++) {
	
// 	linkNav[i].addEventListener('click', function (event) { //по клику на ссылку
		
// 		event.preventDefault(); //отменяем стандартное поведение
		
// 		let w = window.pageYOffset,  // производим прокрутка
// 			hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
		
// 		t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
// 		start = null;
	
// 		requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
		
// 		function step(time) {
			
// 			if (start === null) start = time;
			
// 			let progress = time - start,
// 				r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
			
// 				window.scrollTo(0, r);
			
// 			if (r != w + t) {
// 				requestAnimationFrame(step)
// 			} else {
// 				location.hash = hash  // URL с хэшем
// 			}
// 		}
// 	}, false);
// }