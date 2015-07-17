/** Notes:
 * PI is constant and private to circleArea module.
 */
var _PI = Math.PI;

/**
 * Formula: to calculate the area of circle is PI * Radius * Radius
 */
function circle(radius) {
	return _PI * radius * radius;
}

/**
 * Circle function is exported for other modules as circle function.
 */
module.exports.circle = circle;