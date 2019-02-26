// Mutate an Array Declared with const
const s = [5,7,2];

function editInPlace() {
    "use strict";

    // Use bracket notation to access the array
    // and changes its elements
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();

console.log(s);
// [ 2, 5, 7 ]

// Prevent Object Mutation
function freezeObj() {
    "use strict";

    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);
// 99
// After Object.freeze, we get a TypeError