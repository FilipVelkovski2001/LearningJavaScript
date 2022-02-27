// Rest Operator

const sum = (function(){
    return function sum(...args) { // the ...(rest) operator will convert everything that is passed in into an array called args
        // const args = [x, y, z]; Now we don't need this anymore
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));

// Spread Operator

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
    arr2 = [...arr1]; // The spread operator is used to make a new copy of the arr1 called arr2
    arr1[0] = "potato";
})();
console.log(arr2);