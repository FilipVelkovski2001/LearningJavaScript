// parseInt Function

function convertToInteger(str) {
     return parseInt(str); // Function used for parsing a string to integer
}

var num = convertToInteger("567");
console.log(num);

// parseInt Function with a Radix

function convertToIntegerRadix(str) {
    return parseInt(str, 2); // converting a binary number (base 2) to a integer
}

var num2 = convertToIntegerRadix("10011");

console.log(num2);