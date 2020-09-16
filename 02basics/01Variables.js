var fullName = "Lakshay Kumar";
//camel case vairables, uppercase starting functions
console.log(fullName);

// fullName = prompt("Enter Name:"); // To use this, we need to attach this to a browser.
console.log("Full Name is", fullName);

console.log(`Full Name is ${fullName}.`); //the better way.

console.log(3 ** 3); //3^3

// undefined, was never assigned.
// null, assigned but value not found.
// NaN, not a number

// Global context:
// Even though, fun() is defined later of it's calling. How can JS know it?
// In JS, there is a concept called context. In this, all functions goes to global context, browser's context name is window.
fun();
function fun() {
    console.log("In fun method.");
}

// Execution context
// 1. Function declaration are scanned and made available.
// 2. Variable declaration are scanned and made undefined.

// this, gives access to the global context, browser has Window, node console has {} empty scope.
console.log(this);