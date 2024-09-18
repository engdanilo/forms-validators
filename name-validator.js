// This class is used to validate the name and surname of a person
// The name and surname must have at least 3 characters, no numbers, no special characters and must be strings
// The name and surname are stored in private properties
// The name and surname are converted to uppercase
// The name and surname can be modified using the setters
// The name and surname can be accessed using the getters
// The complete name can be accessed using the getter completeName
// The class has a method to check if the name and surname are valid


const _name = Symbol('name');
const _surname = Symbol('surname');

class NameValidator{

    // ________ Constructor ________
    //IMPORTANT! The name and surname must be strings
    constructor(name, surname){
        this[_name] = name.trim();
        this[_surname] = surname.trim();
    }

    // ________ Getters and Setters ________
    get name(){
        return this[_name].toUpperCase();
    }

    get surname(){
        return this[_surname].toUpperCase();
    }

    get completeName(){
        return `${this[_name].toUpperCase()} ${this[_surname].toUpperCase()}`;
    }

    set name(name){
        this[_name] = name.trim();
    }

    set surname(surname){
        this[_surname] = surname.trim();
    }

    // ________ Methods ________
    // This method checks if the name and surname have at least 3 characters
    nameHasMinimumLength(){
        if(this.name.length < 3 || this.surname.length < 3){
            return false;
        }
        return true;
    }

    // This method checks if the name and surname have numbers
    nameHasNoNumbers(){
        const numberRegex = /\d/;
        if(numberRegex.test(this.name) || numberRegex.test(this.surname)){
            return false;
        }
        return true;
    }

    // This method checks if the name and surname are strings
    nameIsString(){
        if(typeof this.name !== 'string' || typeof this.surname !== 'string'){
            return false;
        }
        return true;
    }

    // This method checks if the name and surname have invalid characters
    nameHasNoInvalidCharacters(){
        const invalidCharsRegex = /[@#$%*&_)(}{+=.,><;:?`]/;
        if(invalidCharsRegex.test(this.name) || invalidCharsRegex.test(this.surname)){
            return false;
        }
        return true;
    }

    // This method checks if the name and surname are valid
    nameIsValid(){
        if(this.nameHasMinimumLength() && this.nameHasNoNumbers() && this.nameIsString() && this.nameHasNoInvalidCharacters()){
            return true;
        }
        return false;
    }
}

// To use the class in other files
// const nameValidator = new NameValidator('John', 'Doe');
// console.log(nameValidator.nameIsValid()); // Returns True

// const nameValidator2 = new NameValidator('John', 'Doe1');
// console.log(nameValidator2.nameIsValid()); // Returns False

// If you want to get the complete name
// console.log(nameValidator.completeName); // Returns JOHN DOE

module.exports = NameValidator;