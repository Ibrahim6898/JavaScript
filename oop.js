// // let baseSalary = 30000
// // let overTime = 10
// // let rate = 20

// // function getWage(baseSalary, overTime, rate){
// //     totalWage = baseSalary + (overTime * rate)
// //     return totalWage
// // }

// // getWage(baseSalary, overTime, rate);

// // console.log("Total Earned:", totalWage)

// let person = {
//     firstName: "Ali",
//     lastName: "Musa",
//     age: 30,
//     hobbies: ["reading", "sports"],
//     greet: function(){
//         console.log("Hello, my name is " + this.firstName + " " + this.lastName)
//     }
// }
// person.greet( )

// function createPerson(firstName, lastName, age) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         greet: function(){
//             console.log("Hello, my name is " + this.firstName + " " + this.lastName)
//         }
//     }
// }

// let person1 = createPerson("John", "Doe", 30)
// let person2 = createPerson("Jane", "Smith", 25)

// person1.greet()
// person2.greet()

// console.log(this)

// const obj = {
//     name: "Alice",
//     greet: function(){
//         console.log(this.name)
//     }
// }
// obj.greet()

// function Person(name) {
//     this.name = name
// }

// const name1 = new Person('Bob')
// console.log(name1.name)

// class Person {
//     talk(){
//         return "Talking"
//     }
// }

// const me = new Person()
// const you = new Person()

// console.log(me.talk())
// console.log(you.talk())

//Define the base constructor
function Person(name, age){
    this.name = name;
    this.age = age;

    this.greet = function (){
        console.log("Hi, I'm " + this.name)
    }
}

//Create a new object that inherits from person
const person1 = new Person("John", 30)
person1.greet()

//Define a child constructor
function Student(name, age, major){
    Person.call(this, name, age)

this.major = major
this.study = function(){
    console.log(this.name + "is studying " + this.major)
}
}

//student inherits from persons prototype
const student1 = new Student("Jane ", 25, "Computer Science")
student1.greet()
student1.study()

function nodefaultparam(number){
    console.log("Result: ", number * number)
}

class Animal {
    constructor(color = "yellow", energy = 100){
        this.color = color
        this.energy = energy
    }
    isActive(){
        if (this.energy > 0){
            this.energy -= 20
            console.log("Energy is decreasing, currently at: ", this.energy)
        }else if(this.enegry == 0){
            this.sleep();
        }
    }
    sleep(){
        this.energy += 20
        console.log("Energy is increasing, currently at: ", this.energy)
    }
    getColor(){
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color, energy){
        super(color, energy)
        this.sound = sound
        this.canClimbTrees = canClimbTrees
        this.canJumpHigh = canJumpHigh
    }
    makeSound(){
        console,log(this.sound)
    }
}
class Bird extends Animal {
    constructor(sound= "chirp", canFly = true, color, energy){
        super(color, energy)
        this.sound = sound
        this.canFly = canFly
    }
    makeSound(){
        console.log(this.sound)
    }
}
class HouseCat extends Animal {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.houseCatSound = houseCatSound
    }
    makeSound(option){
        if (option){ 
            super.makeSound()
        }
        console.log(this.houseCatSound)
    }
}
class Tiger extends Cat {
    constructor(tigerSound = "Roar", sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound
    }
}
class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy){
        super(sound, canFly, color, energy)
        this.canTalk = canTalk
    }
    makeSound(option){
        if (option){
            super.makeSound()
        }
        if(this.canTalk){
            console.log("I'm a talking parrot")
        }
    }
}

let polly = new Parrot(true)
let yuyu = new Parrot(false)

polly.makeSound()
yuyu.makeSound()

console.log(polly.color)
console.log(polly.energy)
polly.isActive()

class Cake {
    constructor(lyr){
        this.layer = lyr + 1
    }
}
let result = new Cake(1)
console.log(result.layer)

class Animals{
    
}
class Cup extends Animals {
    constructor() {
        super()
        this.noise = "meow"
    }
}
let results = new Animals()
console.log(results.noise)

class People {
    sayHello() {
        console.log("Hello")
    }
}

class Friend extends People {
    sayHello(){
        console.log("Hey")
}
}

let output = new Friend()
output.sayHello()


let {PI} = Math
console.log(PI)

PI === Math.PI

const array1 = ['a', 'b', 'c', 'd']
for (const element of array1){
    console.log(element)
}

const car3 = {
    speed: 400,
    color: 'Yellow'
}
console.log(Object.values(car3))

const car4 = {
    speed: 300,
    color: 'magenta'
}
console.log(Object.entries(car4))

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();