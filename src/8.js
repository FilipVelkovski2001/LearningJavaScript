// Concatenating Strings

var str = "I come first. "+ " I come second";

var myStr = "This is the start. " + "This is the end.";

console.log(myStr)

var ourStr = "I come first.";

ourStr += "I come second"; // We can also concatinate using += 

console.log(ourStr) 

var str = "This is the first sentence. ";
str += "This is the second sentence.";

console.log(str) 

// Concatinating strings with variables
var ourName = "Semos";
var hi = "Hello our name is "+ ourName + ", how are you?";

var myName = "Filip";
var myString = "My name is "+ myName + " and I am well!!!";
console.log(myString);

// Appending variables to strings
var anAdjective = "awesome!";
var ourStr = "Semos Education is ";
ourStr += anAdjective;

console.log(ourStr)

var someAdjective = "wortwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;

console.log(myStr)

// Lenght of a String
var firstNameLenght = 0;
var firstName = "Adam";

firstNameLenght = firstName.length;

console.log(firstNameLenght)