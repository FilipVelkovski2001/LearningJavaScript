// Mutate an Array Declared With const

const s = [5, 7, 2];

function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 4; // We can mutate the const array using the bracket notation
    s[2] = 9;
}

editInPlace();
console.log(s);

// Prevent Object Mutation

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // Now we freeze math constatnts so now its immutable

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);