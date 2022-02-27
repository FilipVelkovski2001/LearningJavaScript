// Use Arrow Functions to Write Concise Anonymous Functions

var magic = function() {
    return new Date();
}; // This is called an anonymous function because it doesn't have a name

// Whenever you have an anonimous function you can turn it into an arrow function

var magic = () => {
    return new Date(); // This is an arrow function
};

// But we can shorten it even more if we are using only one return method and no arguements

var magic = () => new Date(); // This is the full function from before even shorter