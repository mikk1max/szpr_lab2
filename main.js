const { calc } = require('./calc')

// import { calc } from "./calc.js"

// import calc from "./calc.js";

console.log("\nTestowanie funkcji calc() : \t")
console.log("5 + 3 = " + calc(5, 3, '+'));
console.log("8 - 1 = " + calc(8, 1, '-'));
console.log("5 * 5 = " + calc(5, 5, '*'));
console.log("12 / 3 = " + calc(12, 3, '/'));