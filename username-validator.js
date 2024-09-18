const _username = Symbol('username');

class UsernameValidator{
    constructor(username){
        this[_username] = username.trim();
    }
}