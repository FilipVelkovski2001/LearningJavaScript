// String variables

var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Filip";
var myLastName = "Velkovski";

// Escaping literal quotes

var myStr = "I am a \"double quoted\" string inside \"double quotes\""; // We use the backslash to tell js that these double quotes belong inside the string
console.log(myStr)

var a = '"something"'; // We can also use single quotes if we have double quotes inside the string
console.log(a)

var b = `'"something'"` // We can also use ` if we want to have single quotes and double quotes
console.log(b)

/*

Escape sequences in strings

CODE OUTPUT:

\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\form feed

*/

var myStr = "firstLine\n\t\\Second line\nThirdLine";
console.log(myStr);