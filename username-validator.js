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

    usernameIsValid(){

        const usernameRegex = /^[a-zA-z0-9]{this.minlength,this.maxlength}$/;

        if (!usernameRegex.test(this[_username])){
            return false;
        }

        return true;

    }

}