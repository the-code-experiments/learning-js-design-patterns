/**
 * Objective: to understand the use of chained api pattern.
 */

var calculator = function(start) {

    /**
     * functions return undefined if in case no return statement specified.
     */
    this.add = function(a) {
        start = start + a;
        return this;
    };

    this.multiply = function(a) {
        start = start * a;
        return this;
    };

    this.equals = function(callback) {
        callback(start);
        return this;
    };
};

/**
 * Output: 30
 *
 * Chain: calculator(start = 0) => add(a = 5) => add(a = 10) => multiply(a = 2) => equals
 *
 * start(0) + add(5) = start(5)
 * start(5) + add(10) = start(15)
 * start(15) * multiply(2) = start(30)
 */
new calculator(0)
    .add(5)
    .add(10)
    .multiply(2)
    .equals(function(result) {
        console.log("Result: ", result);
    });