/**
 * Function is exported for other modules.
 */
module.exports = function() {
	/** Notes:
	 * PI is constant and private to circleArea module.
	 */
	var _PI = Math.PI;
	
	return {
		circle: function(radius) {
			return _PI * radius * radius;
		},

		rectangle: function(length, width) {
			return length * width;
		}
	};
};