const upperCase = require("upper-case").upperCase;

function greet(name) {
    console.log(upperCase(`Hello ${name}, welcome to CodeVolution!`));
}

greet("Danni");
module.exports = greet;