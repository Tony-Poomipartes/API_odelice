/* eslint-disable */

class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Salut, je m'appelle ${this.name}`);
  }
  testThis(){
    console.log(this)
  }
}

// la classe Dog hérite de la classe Animal
class Dog extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  getColor(){
    return this.color;
  }
}

// On dispose donc des méthodes de la classe Animal sur les instances de la classe Dog
const rex = new Dog("rex le chien","noir");
rex.sayHello();
console.log(rex.getColor());

rex.testThis();

const obj = {
  age: 32,
  firstname: 'Bob'
}

obj.testThis = rex.testThis.bind(rex)

obj.testThis()