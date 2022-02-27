// Iterate For Loop

var myArray = [];

for (i = 1; i < 6; i++) {
    myArray.push(i);
}

// Getting the even numbers from an array with a for loop

console.log(myArray);

var pairArray = [1,2,3,4,5,6,7,8,9,10];

for (i = 1; i <= pairArray.length; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
}

// Odd Numbers With a For Loop

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

// Count backwards with a for loop

var myArray = [];

for (var i = 10; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);

// Iterate Trough an Array With a For Loop 

var myArray = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArray.length; i++) {
    total += myArray[i];
}

console.log(total);

// Nesting For Loops

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2,],[3,4],[5,6,7]]);

console.log(product);