// Manipulating Arrays With Functions

// push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy","joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy","joy"]]

// pop()
var myArray = [["John", 23], ["cat", 2]]; // pop is used to remove the last item from an array
var removedFromMyArray = myArray.pop(); // removedFromMyArray now equals: ["cat", 2]
console.log(myArray);

// shift()
var myArray = [["John", 23], ["cat", 2]]; // shift is used to remove the first item from an array
var removedFromMyArray = myArray.shift(); // removedFromMyArray nowe quals: ["John", 23]
console.log(myArray);

// unshift()
var myArray = [["John", 23], ["dog", 3]]; // unshift is used to add the first item to an array (the opposite of what push() does)
myArray.shift();
myArray.unshift(["Paul", 35]); // now the first item will be: ["Paul", 35]
console.log(myArray);