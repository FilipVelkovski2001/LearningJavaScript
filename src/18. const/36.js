// Declare a read-only variable with the const keyword

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!"; // const cannot be changed after it is declared nad initialized

    SENTENCE = str + " is amazing"; // this will throw an error

    for (let i = 0; i < str.length; i += 2) { // for the most part you should use let or const
        console.log(SENTENCE); 
    }
}

printManyTimes("freeCodeCamp"); // SENTENCE is read-only

