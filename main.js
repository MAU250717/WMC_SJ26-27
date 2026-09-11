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