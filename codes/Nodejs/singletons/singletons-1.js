/**
 * Objective: to understand the use of singletons pattern.
 */

/** Notes:
 * It does not matter how many times you will require this module in your application;
 * it will only exist as a single instance.
 */

var calcArea = require('./circleArea');
var radius = 5;

console.log("Area of the circle with radius %d is %d", radius, calcArea.circle(radius));