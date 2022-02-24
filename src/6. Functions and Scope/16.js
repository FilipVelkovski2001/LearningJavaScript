// Local Scope and Functions

function myLocalScope(){
    var myVar = 5; // Because we declared this variable inside this function it becomes local to it
    console.log(myVar);
}
myLocalScope();

console.log(myVar); // This throws an error because the variable cannot be accesed beyond the function scope{}