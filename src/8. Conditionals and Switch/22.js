// Else Statements

function testElse(val){
    var str;
    if(val > 5){
        str = "Bigger than 5";
        return str;
    }
    else{
        str = "Smaller than 5";
        return str;
    }
}

console.log(testElse(4));

// Else If Statements 

function testIfElse(val){
    if (val < 10){
        return "value greater than 10";
    }
    else if (val > 15){
        return "value greater than 15";
    }
    else {
        return "value between 10 and 15";
    }
}

console.log(testIfElse(13));

// Chaining If Else Statements

function checkSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";  
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";  
    }
}
 console.log(checkSize(21));

// Switch Statements 

function caseInSwitch(val) {
    var answer;

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "out of range";                   
    }
    return answer;
}

console.log(caseInSwitch(5));

// Multiple Identical Options in Switch Statements

function sequentalSizes(val) {
    var answer;
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break; 
        case 4:
        case 5:
        case 6:
             answer = "Mid";
             break;    
        case 7:
        case 8:
        case 9:
             answer = "High";
             break;  
        default:
            answer = "Out of range";                       
    }    
    return answer;
}

console.log(sequentalSizes(10));
