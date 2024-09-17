// This module is responsible for validating an email address.
// The email address must have the following format:
// - The address must have between 2 and 64 characters
// - The address must not start or end with a dot
// - The address must not have two consecutive dots
// - The address must not have spaces
// - The domain must have between 2 and 26 characters
// - The domain must not start or end with a hyphen
// - The domain must not have two consecutive hyphens
// - The TLD must have between 2 and 10 characters
// - The TLD must not start or end with a dot
// - The TLD must not have two consecutive dots
// - The email must not end with a dot
// - The email must not have two consecutive dots
// - The email must not have spaces

class EmailValidator {
    constructor(email) {
        this._email = email.trim();
    }

    // Getter to return the email
    get email() {
        return this._email;
    }

    // Setter to set the email
    set email(novoEmail) {
        novoEmail = novoEmail.trim();
        if (this.isEmailValid(novoEmail)) {
            this._email = novoEmail;
            return true;
        }
        return false;
    }

    isEmailValid() {
        // The constant below is a regular expression applied to validate if the email has the correct characters
        // This expression already prevents spaces in the address or domain
        const emailRegex = /^(?!\.)(?!.*\.$)(?!.*\.@)(?!.*\.\.)[a-zA-Z0-9.!#$%&'*/=?^_+-`{|}~]{2,64}@(?!.*\.\.)(?!-)[a-zA-Z0-9]{2,26}(?!-)(?!.*\.\.)(\.[a-zA-Z.]{2,10})(?!\.)+$/;
        // Although the regular expression above theoretically already ensures that there will be no spaces in the email,
        // We will apply, for double validation security, a regular expression to ensure that there are no spaces.
        const whiteSpaceRegex = /^\S+@\S+\.\S+$/;
        // Now we will check if the email is valid according to the regular expressions above
        if (!emailRegex.test(this.email) || !whiteSpaceRegex.test(this.email)) {
            return false;
        }
        return true;
    }
}

// To test this module, you can use the following code:
// const EmailValidator = require('./email-validator');
// const emails = [
//     'usuario@example.com', // valid
//     'user.name@example.com', //valid
//     '.inicial@example.com', // Invalid: Starts with a dot
//     'final.@example.com',   // Invalid: Ends with a dot
//     'dois..pontos@example.com', // Invalid: Two consecutive dots
//     'usuario com espaço@example.com', // Invalid: Contains space
//     'usuario@exemplo.com',   // Valid
//     'usuario@exemplo.c',      // Invalid: TLD too short
//     'usuario@-exemplo.com',    // Invalid: Domain starts with a hyphen
//     'usuario@exemplo-.com',    // Invalid: Domain ends with a hyphen
//     'us@exemplo.com',          // Valid
//     'usuario@exemplo.comaaaaaaaaaaa', // Invalid: Domain too long
//     'us@exemplo.com.',          // Invalid: Domains ends with a dot
//     'br@exemplo.com.br',          // Valid
//     'br@exemplo.com..br',          // Invalid: Two consecutive dots
// ];

// for (let email of emails){
//     let emailValidator = new EmailValidator(email);
//     console.log(emailValidator.isEmailValid());
// }

module.exports = EmailValidator;