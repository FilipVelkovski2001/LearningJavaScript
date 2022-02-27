// Write Arrow Functions With Parameters

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2,3], [4,5,6]));

// Write Higher Order Arrow Functions 


const REAL_NUMBER_ARRAY = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(REAL_NUMBER_ARRAY);
console.log(squaredIntegers);

// Default Parameters

const increment = (function() {
    return function increment(number, value = 1) { // If a value is not passed in it will be automatically set to 1
        return number + value;                     // But if it is passed in it will be set to whatever is passed in
    };
})();

console.log(increment(5, 2));
console.log(increment(5));
