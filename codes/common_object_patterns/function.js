/**
 * Objective: to understand the use of functional arguments pattern.
 */

/**
 * Simple addition function.
 */
function addition(a, b, c) {

    console.log("Arguments length: ", arguments.length);

    console.log("Actual arguments: ", arguments);

    console.log("Second argument: ", arguments[1]);

    return a + b + c;
}

/**
 * Output: 30
 */
console.log("Addition: ", addition(5, 10, 15));

/**
 * Output: 30;
 * 20 will be ignored because function holds only 3 arguments and we are passing 4.
 */
console.log("Addition: ", addition(5, 10, 15, 20));

/**
 * Output: NaN;
 * Function holds 3 arguments and we are passing 2. thus, `c` would undefined, so NaN is returned.
 */
console.log("Addition: ", addition(5, 10));


/**
 * functional arguments pattern implementation overcome the issue in addition function.
 */
function newAddition(a, b, c) {

    var x = 0,
        i = 0;

    for (; i < arguments.length; i++) {
    	x = x + arguments[i];
    }

    return x;
}

/**
 * Output: 30
 */
console.log("New Addition: ", newAddition(5, 10, 15));

/**
 * Output: 50;
 */
console.log("New Addition: ", newAddition(5, 10, 15, 20));

/**
 * Output: 15;
 */
console.log("New Addition: ", newAddition(5, 10));