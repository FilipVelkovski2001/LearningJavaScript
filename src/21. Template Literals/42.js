// Template Literals

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template Literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;

console.log(greeting);

const result = {
    sucess: ["max-length", "no-amd", "preffer-arrow-functions"],
    faliure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blaklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.faliure);

console.log(resultDisplayArray);

// Simple Fields

const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Filip", "20", "Male" ));

