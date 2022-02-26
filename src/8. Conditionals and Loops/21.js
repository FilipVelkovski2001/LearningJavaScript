// And Operator

function testLogicalAnd(val){
    if (val <= 50 && val >= 25) {
        return "yes";   
    }
return "No";
}

console.log(testLogicalAnd(27));


// Or Operator

function testLogicalOr(val){
    if (val < 10 || val > 20){
        return "yes";
    }
    return "No";
}

console.log(testLogicalOr(21));