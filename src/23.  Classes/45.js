// getters and setters

class Book {
    constructor(author) {
        this.author = author;
    }

    get writer(){
        return this.author;
    }

    set writer(updateAuthor){
        this.author = updateAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(newTemp) {
            this._temp = newTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(70);
let temp = thermos.temperature; // getters and setter in JS are accesed similar to properties and variables without ()
thermos.temperature = 26; // this is how a setter is used
temp = thermos.temperature;
console.log(temp);