// Accesing Object Properties with Dot Notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats", 
    "pantsColor": "brown"
};

var hatValue = testObj.hat; // In this way we store the property from hat(testObj) to hatValue
var shirtValue = testObj.shirt; 
console.log(hatValue, shirtValue); 

// Accesing Object Properties with Bracket Notation 

var shoesValue = testObj["shoes"]; // In this way we can access the properties with the bracket notation
var pantsColorValue = testObj["pantsColor"];

console.log(shoesValue, pantsColorValue);

// Accesing Object Properties with Variables

var newObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16; // We give a reference to the name "Montana" by passing the property name as a variable
var player = newObj[playerNumber];  // Then we pass that variable into the bracket and that is how this variable gets the value "Montana"

console.log(playerNumber, player);