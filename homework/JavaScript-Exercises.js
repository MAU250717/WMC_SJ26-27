// ===== STRINGS =====
let name = "Fabian";

// E1
let message1 = "Hello, my name is " + name + ".";
console.log(message1);

// E2
let message2 = `Hello, my name is ${name}.`;
console.log(message2);

// E3
const exoticString = "გამარჯობა მსოფლიო"; // "Hello World" in Georgian
console.log(exoticString);
console.log(exoticString.length);

// ===== FUNCTIONS =====
// E1
function greet(name) {
    if (typeof name !== 'string') return null;
    return `Hello, ${name}!`;
}

console.log(greet('John'));
console.log(greet(25));


// E2
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return null;
    return a + b;
}

console.log(add(5, 3));
console.log(add('5', '3'));


// E3
function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return null;
    return a - b;
}

console.log(subtract(5, 3));
console.log(subtract('5', '3'));


// E4
function calculate(num1, num2, operation) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return null;

    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return null;
    }
}

console.log(calculate(5, 3, 'add'));
console.log(calculate(5, 3, 'subtract'));
console.log(calculate(5, 3, 'multiply'));
console.log(calculate(5, 3, 'divide'));
console.log(calculate(5, 3, 'modulus'));

// E5
function getNumberFormUser() {
    let input = prompt("Enter a number: ");

    if (input === null) {
        return null;
    }

    let num = Number(input);

    if (isNaN(num) || input.trim() === "") {
        return null;
    }

    return num;
}

let result1 = getNumberFormUser();
console.log("Ergebnis von Test 1:", result1, "| Typ:");
console.log("Ergebnis von Test 2:", result1, "| Typ:");

// E6
function getNumberFormUserExtended() {
    while(true) {
        let input = prompt("Enter a number: ");

        if (input === null) {
            return null;
        }

        let num = Number(input);

        if (!isNaN(num) && input.trim() !== "") {
            return  num;
        }
        alert("try again");
    }
}

let result2 = getNumberFormUserExtended();
console.log("Ergebnis von Test 1:", result2, "| Typ:");
console.log("Ergebnis von Test 2:", result2, "| Typ:");

// E7
function calculator() {
    while (true) {
        let operation = prompt("Enter operation (add, subtract, multiply, divide) or 'exit' to quit: ");

        if (operation === null || operation.trim().toLowerCase() === "exit") {
            console.log("Calculator closed.");
            break;
        }

        operation = operation.trim().toLowerCase();

        if (!["add", "subtract", "multiply", "divide"].includes(operation)) {
            alert("Invalid operation. Try again.");
            continue;
        }

        let num1 = getNumberFormUserExtended();
        if (num1 === null) break;

        let num2 = getNumberFormUserExtended();
        if (num2 === null) break;

        let result = calculate(num1, num2, operation);

        if (result === null) {
            console.log("Error: invalid calculation.");
        } else {
            console.log(`${num1} ${operation} ${num2} = ${result}`);
        }
    }
}

// ===== OBJECTS =====
const game = {playerName: 'Alice', score: 0, rank: 1, isAlive: true};

// E1
const person = {name: 'Alice', age: 30, isStudent: false};
console.log(person); // Test 1


// E2
console.log(game); // Test 1


// E3
game.updateScore = function (points) {
    this.score = points;
};

game.reset = function () {
    this.score = 0;
    this.rank = 1;
    this.isAlive = true;
};

game.updateScore(150);
console.log(game); // Test 1

game.reset();
console.log(game); // Test 2


// E4
function createPerson(name, age) {
    if (typeof name !== 'string' || typeof age !== 'number') return null;
    return { name, age };
}

console.log(createPerson('John', 25));
console.log(createPerson(25, 'John'));


// ===== ARRAYS =====
const numbers = [1, 2, 3, 4, 5];

// E1
console.log(numbers); // Test 1

// E2
numbers.push(6);
console.log(numbers); // Test 1

// E3
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(numbers));
console.log(sum([]));
console.log(sum(['1', '2', '3']));