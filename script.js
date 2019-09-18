'use strict';

// Классы
class Rectangle {
	constructor(height, widht = 20) {
		this.height = height;
		this.widht = widht;
	}

	calcArea() {
		return this.height * this.widht;
	}
}

class MessResault extends Rectangle {

	sayResault() {
		console.log(`Resault ${this.height} on ${this.widht} is ${this.height * this.widht}`);
	}
}

const square = new Rectangle(10);
const sayRes = new MessResault(5, 7);

console.log(square.calcArea());
console.log(sayRes.sayResault());
