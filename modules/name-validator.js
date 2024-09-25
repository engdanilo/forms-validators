// This class is used to validate the name and surname of a person
// The name and surname must have at least 3 characters, no numbers, no special characters and must be strings
// The name and surname are stored in private properties
// The name and surname are converted to uppercase
// The name and surname can be modified using the setters
// The name and surname can be accessed using the getters
// The complete name can be accessed using the getter completeName
// The class has a method to check if the name and surname are valid


// Define unique symbols for the name and surname properties to ensure they are private
const _name = Symbol('name');
const _surname = Symbol('surname');

class NameValidator {

    // ________ Constructor ________
    // IMPORTANT! The name and surname must be strings
    constructor(name, surname) {
        // Trim the input name and assign it to the private _name property
        this[_name] = name.trim();
        // Trim the input surname and assign it to the private _surname property
        this[_surname] = surname.trim();
        // Initialize an error message property
        this.err = '';
    }

    // ________ Getters and Setters ________
    // Getter method to retrieve the name in uppercase
    get name() {
        return this[_name].toUpperCase();
    }

    // Getter method to retrieve the surname in uppercase
    get surname() {
        return this[_surname].toUpperCase();
    }

    // Getter method to retrieve the complete name in uppercase
    get completeName() {
        return `${this[_name].toUpperCase()} ${this[_surname].toUpperCase()}`;
    }

    // Setter method to update the name
    set name(name) {
        // Create a new instance of NameValidator with the input name and existing surname
        const newName = new NameValidator(name, this[_surname]);
        // Validate the new name
        if (!newName.nameIsValid()) {
            // Set the error message if the name is invalid
            this.err = 'Invalid name';
            return false;
        }
        // Trim and set the new name if it's valid
        this[_name] = name.trim();
        return true;
    }

    // Setter method to update the surname
    set surname(surname) {
        // Create a new instance of NameValidator with the existing name and input surname
        const newSurname = new NameValidator(this[_name], surname);
        // Validate the new surname
        if (!newSurname.nameIsValid()) {
            // Set the error message if the surname is invalid
            this.err = 'Invalid surname';
            return false;
        }
        // Trim and set the new surname if it's valid
        this[_surname] = surname.trim();
        return true;
    }

    // ________ Methods ________
    // This method checks if the name and surname have at least 3 characters
    nameHasMinimumLength() {
        // Check if the name or surname has less than 2 characters
        if (this.name.length < 2 || this.surname.length < 2) {
            // Set the error message if the name or surname has less than 2 characters
            this.err = 'Name and surname must have at least 2 characters';
            return false;
        }
        return true;
    }

    // This method checks if the name and surname have numbers
    nameHasNoNumbers() {
        // Regular expression to check for numbers
        const numberRegex = /\d/;
        // Test the name and surname against the regular expression
        if (numberRegex.test(this.name) || numberRegex.test(this.surname)) {
            // Set the error message if the name or surname contains numbers
            this.err = 'Name and surname must not contain numbers';
            return false;
        }
        return true;
    }

    // This method checks if the name and surname are strings
    nameIsString() {
        // Check if the name or surname is not a string
        if (typeof this.name !== 'string' || typeof this.surname !== 'string') {
            // Set the error message if the name or surname is not a string
            this.err = 'Name and surname must be strings';
            return false;
        }
        return true;
    }

    // This method checks if the name and surname have invalid characters
    nameHasNoInvalidCharacters() {
        // Regular expression to check for invalid characters
        const invalidCharsRegex = /[@#$%*&_)(}{+=.,><;:?`]/;
        // Test the name and surname against the regular expression
        if (invalidCharsRegex.test(this.name) || invalidCharsRegex.test(this.surname)) {
            // Set the error message if the name or surname contains special characters
            this.err = 'Name and surname must not contain special characters';
            return false;
        }
        return true;
    }

    // This method checks if the name and surname are valid
    nameIsValid() {
        // Check if the name and surname meet all validation criteria
        if (this.nameHasMinimumLength() && this.nameHasNoNumbers() && this.nameIsString() && this.nameHasNoInvalidCharacters()) {
            // Clear the error message if the name and surname are valid
            this.err = '';
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