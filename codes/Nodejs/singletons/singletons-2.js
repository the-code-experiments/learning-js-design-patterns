/**
 * Objective: to understand the use of singletons pattern.
 */

/** Notes:
 * It does not matter how many times you will require this module in your application;
 * it will only exist as a single instance.
 */

var CalcArea = require('./area');
var radius = length = width = 5;
var calcArea = CalcArea();

console.log("Area of the circle with radius %d is %d", radius, calcArea.circle(radius));

console.log("Area of the rectangle with length %d and width %d is %d", length, width, calcArea.rectangle(length, width));