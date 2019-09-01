'use strict'

let soldier = {
	halth: 400,
	armor: 150,
};

let john = {
	halth: 200,
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);



class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// Использование:
let user = new User("Иван");
user.sayHi();