/** Notes:
 * PI is constant.
 * 
 */
var PI = Math.PI;

/**
 * Formula: to calculate the area of circle is PI * Radius * Radius
 */
function circle(radius) {
	return PI * radius * radius;
}

/**
 * Circle function is exported for other modules as circle function.
 */
module.exports.circle = circle;