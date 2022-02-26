// Updating Object Properties

var myDog = {
    "name": "Crni",
    "legs": 4,
    "tail": true,
    "favToy": "ball",
    "friends": ["me","sis","dori","mom", "dad"]
};

myDog.name = "Happy Camper"; // We update the name value with the = operator

console.log(myDog.name);

// Add new properties to an Object 

// You can add new values to an object useing . notation or [] notation
myDog.bark = "Raf-Raf"; // . Notation
myDog["bark"] = "Rufufuf"; // [] Notation

console.log(myDog);

// Delete Properties From an Object

delete myDog.bark;
console.log(myDog);

// Using Objects for lookups

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val]
    return result;
}

console.log(phoneticLookup("charlie"));

// Testing Objects for Properties

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("gift"));
