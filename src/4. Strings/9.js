// Bracket Notation
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0]; // Getting the letter on the 0 index (A)

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; // Getting the letter on the 0 index (L)

console.log(firstLetterOfFirstName);
console.log(firstLetterOfLastName);

// Understanding String Immutability
var myStr = "Jello World";

myStr = "Hello World";

// Find the Nth characte
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2]; 

console.log(thirdLetterOfLastName);

// Bracket Notation to find the last character of the String
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastLetterOfLastName = lastName[lastName.length -1];
console.log(lastLetterOfFirstName + lastLetterOfLastName);

// Bracket Notation to Find Nth-to-Last Character in String
var thirdToLastLetterOfLastName = lastName[lastName -3];
