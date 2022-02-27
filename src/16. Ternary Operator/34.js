// Ternary Operator

function checkEqual (a,b) {
    return a === b ? true : false;
    // return a === b; - This line does the same thing but we just did the operation above for an example
}

console.log(checkEqual(15,15));

// Use Multiple Conditions Ternary Operator

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; 
}

console.log(checkSign(0));