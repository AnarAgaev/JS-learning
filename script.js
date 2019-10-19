'use strict';

// let app = {
// 	data: 4,
// };

// console.log(app);


// function User(name, age) {
// 	this.name = name;
// 	let userAge = age;

// 	this.gatAge = function() {
// 		return userAge;
// 	};

// 	this.setAge = function(age) {
// 		if (typeof age == 'number' && age > 0 && age < 110) {
// 			userAge = age;
// 		} else {
// 			throw new Error("Incorret value of age");
// 		}
// 	};

// 	this.say = function () {
// 		console.log(`User's name is ${this.name}. Hi's ${this.userAge} years old.`);
// 	};
// }

// let user = new User('Ivan', 25);

// console.log(user.name);
// console.log(user.userAge);
// user.say();
// console.log(user.gatAge());
// user.setAge('30');
// console.log(user.gatAge());


// let number = 1;

// (function() {
// 	let number = 2;
// 	console.log(number);

// 	return console.log(number + 3);
// })();

// console.log(number);

// let user = (function() {
// 	let privat = function() {
// 		console.log('I am pravet.');
// 	};

// 	let	sayHello = function() {
// 		console.log('Hello!');
// 	};

// 	return {
// 		sayHello: sayHello,
// 	};
// }());

// console.log(user);
// console.log(user.sayHello());


