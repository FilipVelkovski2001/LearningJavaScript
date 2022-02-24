// Assignment with a returned value

var processed = 0;

function processArg(num){
    return (num + 3) / 5; // You can pass a return value to a variable
}

processed = processArg(7); // Now process equals this mathematical expession in the function processArg()

// Stand in Line

function nextInLine(arr, item){
    arr.push(item); 
    arr.shift();
    return item;
  
}

var testArray = [1,2,3,4,5];

console.log("Before: "+ JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("After: "+ JSON.stringify(testArray));