// Generate Random Decimal Numbers

function randomFunction() {
    return Math.random(); // Creates a random decimal number
}

console.log(randomFunction());

// Generate Random Whole Numbers

var randomWholeNumBetween0and19 = Math.floor(Math.random() * 20); // This is going to create a random whole number between 0 and 19

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
    // Random num between 0 and 9
}

console.log(randomWholeNum());

// // Generate Random Whole Numbers Within a Range

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);