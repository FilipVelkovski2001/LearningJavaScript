// Use Conditional Logic With If Statements

function ourTrueFalse(isItTrue){
    if(isItTrue){
        return "Yes it's true";
    }
    return "No it's false";
}

function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes that was true"; // If the boolean wasThatTrue is true return this string
    }
    return "No, that was not true"; // If it is not true ignore the first return and return this string
}

console.log(trueOrFalse(true));

// Comparison Operators 

// Equality Operator

function testEqual(val){
    if(val == 12){  
        return "Equal";
    }
    return "Not equal";
}

console.log(testEqual(12));

// Strict Equality Operator 

function testStrict(val){
    if (val === 3) {
        return "Equal"; // The strict equality operator doesn't just check the value it also checks the type!
    }
    return "Not equal";
}

console.log(testStrict("3"));

/*
3 === 3 true      BOTH OF THESE WOULD BE TRUE IF WE WERE TO USE THE == OPERATOR
3 === "3" false   THE STRING WOULD BE CONVERTED TO A NUMBER AND BOTH WOULD BE TRUE
*/

// Inequality Operator

function testNotEqual(val){
    if (val != 10){
        return "Not equal";
    }
    return "Equal";
}

console.log(testNotEqual("10")); // Just like the equality operator this odes type conversion


// Strict Inequality Operator

function testNotEqual(val){
    if (val !== 10){
        return "Not equal";
    }
    return "Equal";
}

console.log(testNotEqual(10)); // Just like the strict equality operator this checks the variable type 
