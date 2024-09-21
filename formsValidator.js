const cnpjValidator = require('./cnpj-validator');
const cpfValidator = require('./cpf-validator');
const emailValidator = require('./email-validator');
const nameValidator = require('./name-validator');
const dateValidator = require('./date-validator');
const usDateValidator = require('./us-date-validator');
const usernameValidator = require('./username-validator');

class FormsValidator{

    constructor(cnpj='', cpf='', email='', name='', surname='', date='', usDate='', username='', userMinLength=3, userMaxLength=20){
        this.cnpjValidator = new cnpjValidator(cnpj);
        this.cpfValidator = new cpfValidator(cpf);
        this.emailValidator = new emailValidator(email);
        this.nameValidator = new nameValidator(name, surname);
        this.dateValidator = new dateValidator(date);
        this.usDateValidator = new usDateValidator(usDate);
        this.usernameValidator = new usernameValidator(username, userMinLength, userMaxLength);
    }

    validateCnpj(){
        return this.cnpjValidator.isCnpjTrue();
    }

    get cnpj(){
        return this.cnpjValidator.cnpj;
    }

    validateCpf(){
        return this.cpfValidator.isCpfTrue();
    }

    get cpf(){
        return this.cpfValidator.cpf;
    }

    validateEmail(){
        return this.emailValidator.isEmailTrue();
    }

    get email(){
        return this.emailValidator.email;
    }

    set email(email){
        this.emailValidator.email = email;
    }

    validateName(){
        return this.nameValidator.isNameTrue();
    }

    get name(){
        return this.nameValidator.name;
    }

    get surname(){
        return this.nameValidator.surname;
    }

    get completeName(){
        return this.nameValidator.completeName;
    }

    set name(nameInput){
        this.nameValidator.name = nameInput;
    }

    set surname(surnameInput){
        this.nameValidator.surname = surnameInput;
    }

    validateDate(){
        return this.dateValidator.isDateTrue();
    }

    get date(){
        return this.dateValidator.date;
    }

    set date(dateInput){
        this.dateValidator.date = dateInput;
    }

    validateUsDate(){
        return this.usDateValidator.isUsDateTrue();
    }

    get usDate(){
        return this.usDateValidator.usDate;
    }

    set usDate(usDateInput){
        this.usDateValidator.usDate = usDateInput;
    }

    validateUsername(){
        return this.usernameValidator.isUsernameTrue();
    }

    get username(){
        return this.usernameValidator.username;
    }

    set username(usernameInput){
        this.usernameValidator.username = usernameInput;
    }
}