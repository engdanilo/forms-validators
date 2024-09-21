// Description: This file contains the logic to validate the username.
// the username once created can't be changed.
// The username should be alphanumeric and should be between minlength to maxlength characters.
// The default minlength is 3 and default maxlength is 20.

const _username = Symbol('username');

class UsernameValidator{

    constructor(username, minlength=3, maxlength=20){
        this[_username] = username.trim();
        this.minlength = minlength;
        this.maxlength = maxlength;
    }

    get username(){
        return this[_username];
    }

    set username(usernameInput){
        let username = new UsernameValidator(usernameInput);
        if(!username.usernameIsValid()) return false;
        this[_username] = usernameInput.trim();
    }

    usernameIsValid(){

        const usernameRegex = new RegExp(`^[a-zA-z0-9]{${this.minlength},${this.maxlength}}$`);

        if (!usernameRegex.test(this[_username])){
            return false;
        }
        return true;
    }
}

// to test the code
// let user = new UsernameValidator('john2024'); // should return true
// console.log(user.usernameIsValid());
// user.username = 'johnboy';
// console.log(user.username); // The username can't be changed

module.exports = UsernameValidator;