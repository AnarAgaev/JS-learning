'use strict';

function User(name, age) {
	this.name = name;
	let userAge = age;

	this.gatAge = function() {
		return userAge;
	};

	this.setAge = function(age) {
		if (typeof age == 'number' && age > 0 && age < 110) {
			userAge = age;
		} else {
			throw new Error("Incorret value of age");
		}
	};

	this.say = function () {
		console.log(`User's name is ${this.name}. Hi's ${this.userAge} years old.`);
	};
}

let user = new User('Ivan', 25);

console.log(user.name);
console.log(user.userAge);
user.say();
console.log(user.gatAge());
user.setAge('30');
console.log(user.gatAge());
