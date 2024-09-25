// Description: This file contains the logic to validate the username.
// the username once created can't be changed.
// The username should be alphanumeric and should be between minlength to maxlength characters.
// The default minlength is 3 and default maxlength is 20.

// Define a unique symbol for the username property to ensure it's private
const _username = Symbol('username');

class UsernameValidator {

    // Constructor to initialize the username, minimum length, and maximum length
    constructor(username, minlength = 3, maxlength = 20) {
        // Trim the username and assign it to the private _username property
        this[_username] = username.trim();
        // Set the minimum length for the username
        this.minlength = minlength;
        // Set the maximum length for the username
        this.maxlength = maxlength;
        // Initialize an error message property
        this.err = '';
    }

    // Getter method to retrieve the username
    get username() {
        return this[_username];
    }

    // Setter method to update the username
    set username(usernameInput) {
        // Create a new instance of UsernameValidator with the input username
        let newUsername = new UsernameValidator(usernameInput);
        // Validate the new username
        if (!newUsername.usernameIsValid()) {
            // Set the error message if the username is invalid
            this.err = 'The username should be alphanumeric and should be between minlength to maxlength characters.';
            return false;
        }
        // Trim and set the new username if it's valid
        this[_username] = usernameInput.trim();
    }

    // Method to validate the username
    usernameIsValid() {
        // Regular expression to check if the username is alphanumeric and within the specified length
        const usernameRegex = new RegExp(`^[a-zA-Z0-9]{${this.minlength},${this.maxlength}}$`);

        // Test the username against the regular expression
        if (!usernameRegex.test(this[_username])) {
            // Set the error message if the username is invalid
            this.err = 'The username should be alphanumeric and should be between minlength to maxlength characters.';
            return false;
        }
        // Return true if the username is valid
        this.err = '';
        return true;
    }
}

// to test the code
// let user = new UsernameValidator('john2024'); // should return true
// console.log(user.usernameIsValid());
// user.username = 'johnboy';
// console.log(user.username); // The username can't be changed

module.exports = UsernameValidator;