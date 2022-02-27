// Replacing If Else Chains With Switch

function chainToSwitch(val) {
    var answer;
    switch (val) {
        case "bob":
            answer = "marley";
            break;
        case 42:
            answer = "the answer";
            break;
        case 1:
            answer = "there is no #1";
            break;
        case 99:
            answer = "missed by this much!";
            break;
        case 7:
            answer = "ate nine";
            break;    
        default:
            answer = "default called";                     
    }
    return answer;
}

console.log(chainToSwitch(42));