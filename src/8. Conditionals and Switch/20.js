
// Greater Than Operator

function testGreaterThan(val){
    if (val > 100){
        return "Bigger than 100";
    }
    return "Not bigger than 100";
}

console.log(testGreaterThan(101));

// Greater than or Equal to Operator

function testGreaterThanOrEqualTo(val){
    if (val >= 20){
        return "Bigger than or equal to 20";
    }
    return "Not greater than or equal to 20";
}

console.log(testGreaterThanOrEqualTo(19));

// Less than

function testLessThan(val){
    if (val < 100){
        return "Less than 100";
    }
    return "Not Less than 100";
}

console.log(testLessThan(101));

// Less than or equal to

function testLessThanOrEqualTo(val){
    if (val <= 20){
        return "Smaller than or equal to 20";
    }
    return "Not smaller than or equal to 20";
}

console.log(testLessThanOrEqualTo(19));
