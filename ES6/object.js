// Write Concise object Literal Declarations using Simpe Fields

const createPerson = (name, age, gender) => ({
    name,
    age,
    gender
});

console.log(createPerson("Zodiac Hasbro", 56, "male"));
// {
//     name: 'Zodiac Hasbro',
//     age: 56,
//     gender: 'male'
// }


// Use class Syntax to Define a Constructor Function
// Before
// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
// }

// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet);
// Jupiter

// After
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)
// Jupiter

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');

console.log(carrot.name);
// carrot

// Use getters and setters to Control Access to an Object
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass(){
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        // getter
        get temperature(){
            return this._temp;
        }
        // setter
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
// 26

// Understand the Differences Between import and require