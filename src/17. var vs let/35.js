// Difference between var and let keyword

let catName = "Quincy"; // let prevents duplication in the same scope
let quote;

CatName = "Beau";

function catTalk() {
    "use strict"; 
     catName = "Oliver";
     quote = catName + "says Meow!";
}
catTalk();

// Compare Scopes of the var and let keywords

function checkScope() {
    "use strict";
    let i = "function scope"; // let is limited to the block statement or expression it was declared in
    if (true) {
        let i = "block scope";
        console.log("Block scope is: " + i);
    }
    console.log("Function scope is: "+ i);
    return i;
}

checkScope();



