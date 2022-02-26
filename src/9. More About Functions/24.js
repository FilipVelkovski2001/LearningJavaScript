// Returning Boolean Values From Functions 

function isLess(a, b) {
    // Instead of doing id-else statement to return a boolean we can simply do it like this:
    return a < b; 
}

console.log(isLess(20,15));

// Returning Early Pattern From Functions

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;        
    }
    return Math.round(Math.pow(Math.sqrt(a) + Match.sqrt(b), 2));
}

console.log(abTest(-2,2));