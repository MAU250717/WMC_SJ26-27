//Functions
function greetings() {
    return `Hallo ${name}, willkommen in der SPG`
}

//Objects
const person1 = {name: `Anna`, age: 18};
const person2 = {name: `Bob`, age: 23};
//console.log(person1);

// . (dot) notation
person1.name = "Carl";
console.log(person1.name);

// bracket notation
const propName = "name";
console.log(person1["name"]);
console.log(person1[propName]);

//Arrays
const numbers = [1,2,3];
const names = ["Anna", "Bob","Carl"];
const mixed = [1, "Ana", true];

//const name = "Fabian";
//const greetingString = greetings(name);
//console.log(greetingString);

// Polymorph
function add(number1, number2)
{
    if (typeof number1 === "number" && number1 > 0) {
        if (typeof number2 === "number" && number2 > 0) {
            // Happy Path
            return number1 + number2;
        } else {
            // throw new Error(`Das ist keine positive Number ${number2}`);
            return `Das ist keine positive Number ${number2}`;
            // return "Das ist keine Number 1" + number2;
        }
    } else {
        return `Das ist keine positive Number ${number1}`;
    }
}

// Refactored
const err = `Das ist keine positive Number`
function add(number1,number2) {
    if(typeof number1 !== "number" && number1 <= 0){
        throw new Error(err + number1);
    }
    if(typeof number2 !== "number" && number2 <= 0) {
        throw new Error(err + number2);
    }

    return number1 + number2;
}

add(1,2);