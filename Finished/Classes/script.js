// function Animal(name) {
//   this.name = name;

//   this.getName = function() {
//     return this.name;
//   }
// }

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// 4 principles of OOP
/**
 * Inheritance
 * Incapsulation hiding data from access out of class or during inheritance 
 * Polymorphism
 * Abstraction
 */
//Inheritance
// class Plane {
//   constructor(model, capability) {
//     this.model = model;
//     this.capability = capability;
//   }
//   startFlight() {
//     console.log('Flying')
//   }
// }
 
// class MilitaryPlane extends Plane {
//   constructor(type) {
//     super(type, 0);
//   }
//   startFlight() {
//     console.log('Attack')
//   }
// }

// const military = new MilitaryPlane('military');
// console.log(military.startFlight())
// console.log(military instanceof MilitaryPlane)
// console.log(military instanceof Plane)

//Incapsulation 

// class Developer {
//   #salary;
//   constructor(name, language) {
//     this.name = name;
//     this.language = language;
//     this.#salary = 3000;
//   } 

//   startCoding() {
//     console.log('Coding')
//   }

//   mySalary() {
//     console.log(this.#getsalary());
//   }

//   getLanguage() {
//     console.log(this.language)
//   } 
//   #getsalary() {
//     return this.#salary;
//   }
// }

// const developer = new Developer('Alex', 'JS');
// developer.mySalary()

//Polymorphism
//One action and several ways to create;

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   voice() {

//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);

//   }
//   voice() {
//     console.log('Huwwwwwwwwwwww');
//   }
// }

// class Horse extends Animal{
//   constructor(name) {
//     super(name);
//   }

//   voice() {
//     console.log('Igogo');
//   }
// }

// Abstraction
// class Footballer {
//   constructor(name, club) {
//     this.name = name;
//     this.club = club;
//   }

//   shoot() {}
//   celebrateGoal() {}
//   pass() {}
// }

// class Forward extends Footballer {
//   constructor(name, club) {
//     super(name, club);
//   }
// }

class Car {
  static isCar(car) {
    return car instanceof Car;
  }
  static #initialParans = {
    name: 'Audi',
    maxSpeed: 150,
  }
  constructor(name, maxSpeed) {
    this.name = name || Car.#initialParans.name;
    this.maxSpeed = maxSpeed || Car.#initialParans.maxSpeed;
  }

  drive() {
    console.log(`Car ${this.name} on its way`);
  }
}

const car = new Car();
console.log(car);
const animal = {};
const isCar = Car.isCar(car)
console.log(isCar);
console.log(Car.isCar(animal));
