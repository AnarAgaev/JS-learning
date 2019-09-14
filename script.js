'use strict'

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = () => {
// 		console.log('Hello ' + this.name);		
// 	}
// }

// User.prototype.exit = function(name) {
// 	console.log('User ' + this.name + ' is log out!');
// }

// let ivan = new User('Ivan', 25);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();


// In es6

class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;
	}

	hello() {
		console.log(`Hello ${ this.name}`);
	}

	exit() {
		console.log(`User ${this.name} is log out!`);
	}
}

let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello();
ivan.exit();
alex.hello();
alex.exit();

