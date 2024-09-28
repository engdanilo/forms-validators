// Importa os módulos de validação necessários
const cnpjValidator = require('./modules/cnpj-validator');
const cpfValidator = require('./modules/cpf-validator');
const emailValidator = require('./modules/email-validator');
const nameValidator = require('./modules/name-validator');
const dateValidator = require('./modules/date-validator');
const usDateValidator = require('./modules/us-date-validator');
const usernameValidator = require('./modules/username-validator');

// Define a classe FormsValidator para validar diferentes tipos de dados de formulário
class BrFormsValidator {

    // Construtor para inicializar os validadores com os valores fornecidos
    constructor(cnpj='', cpf='', email='', name='', surname='', date='', usDate='', username='', userMinLength=3, userMaxLength=20) {
        // Inicializa o validador de CNPJ com o valor fornecido
        this.cnpjValidator = new cnpjValidator(cnpj);
        // Inicializa o validador de CPF com o valor fornecido
        this.cpfValidator = new cpfValidator(cpf);
        // Inicializa o validador de email com o valor fornecido
        this.emailValidator = new emailValidator(email);
        // Inicializa o validador de nome com os valores fornecidos para nome e sobrenome
        this.nameValidator = new nameValidator(name, surname);
        // Inicializa o validador de data com o valor fornecido
        this.dateValidator = new dateValidator(date);
        // Inicializa o validador de data no formato US com o valor fornecido
        this.usDateValidator = new usDateValidator(usDate);
        // Inicializa o validador de nome de usuário com os valores fornecidos para nome de usuário, comprimento mínimo e máximo
        this.usernameValidator = new usernameValidator(username, userMinLength, userMaxLength);
    }

    // Método para validar o CNPJ
    validateCnpj() {
        // Verifica se o CNPJ é válido e retorna o resultado e a mensagem de erro, se houver
        if (this.cnpjValidator.isCnpjTrue()) {
            return [true, this.cnpjValidator.err];
        } else {
            return [false, this.cnpjValidator.err];
        }
    }

    // Getter para obter o CNPJ
    get cnpj() {
        return this.cnpjValidator.cnpj;
    }

    // Método para validar o CPF
    validateCpf() {
        // Verifica se o CPF é válido e retorna o resultado e a mensagem de erro, se houver
        if (this.cpfValidator.isCpfTrue()) {
            return [true, this.cpfValidator.err];
        } else {
            return [false, this.cpfValidator.err];
        }
    }

    // Getter para obter o CPF
    get cpf() {
        return this.cpfValidator.cpf;
    }

    // Método para validar o email
    validateEmail() {
        // Verifica se o email é válido e retorna o resultado e a mensagem de erro, se houver
        if (this.emailValidator.isEmailTrue()) {
            return [true, this.emailValidator.err];
        } else {
            return [false, this.emailValidator.err];
        }
    }

    // Getter para obter o email
    get email() {
        return this.emailValidator.email;
    }

    // Setter para definir o email e validar
    set email(email) {
        // Define o email e verifica se é válido, retornando o resultado e a mensagem de erro, se houver
        if ((this.emailValidator.email = email) === true) {
            return [true, this.emailValidator.err];
        } else {
            return [false, this.emailValidator.err];
        }
    }

    // Método para validar o nome
    validateName() {
        // Verifica se o nome é válido e retorna o resultado e a mensagem de erro, se houver
        if (this.nameValidator.isNameTrue()) {
            return [true, this.nameValidator.err];
        } else {
            return [false, this.nameValidator.err];
        }
    }

    // Getter para obter o nome
    get name() {
        return this.nameValidator.name;
    }

    // Getter para obter o sobrenome
    get surname() {
        return this.nameValidator.surname;
    }

    // Getter para obter o nome completo
    get completeName() {
        return this.nameValidator.completeName;
    }

    // Setter para definir o nome e validar
    set name(nameInput) {
        // Define o nome e verifica se é válido, retornando o resultado e a mensagem de erro, se houver
        if ((this.nameValidator.name = nameInput) === true) {
            return [true, this.nameValidator.err];
        } else {
            return [false, this.nameValidator.err];
        }
    }

    // Setter para definir o sobrenome e validar
    set surname(surnameInput) {
        // Define o sobrenome e verifica se é válido, retornando o resultado e a mensagem de erro, se houver
        if ((this.nameValidator.surname = surnameInput) === true) {
            return [true, this.nameValidator.err];
        } else {
            return [false, this.nameValidator.err];
        }
    }

    // Método para validar a data
    validateDate() {
        // Verifica se a data é válida e retorna o resultado e a mensagem de erro, se houver
        if (this.dateValidator.isDateTrue()) {
            return [true, this.dateValidator.err];
        } else {
            return [false, this.dateValidator.err];
        }
    }

    // Getter para obter a data
    get date() {
        return this.dateValidator.date;
    }

    // Setter para definir a data e validar
    set date(dateInput) {
        // Define a data e verifica se é válida, retornando o resultado e a mensagem de erro, se houver
        if ((this.dateValidator.date = dateInput) === true) {
            return [true, this.dateValidator.err];
        } else {
            return [false, this.dateValidator.err];
        }
    }

    // Método para validar a data no formato US
    validateUsDate() {
        // Verifica se a data no formato US é válida e retorna o resultado e a mensagem de erro, se houver
        if (this.usDateValidator.isUsDateTrue()) {
            return [true, this.usDateValidator.err];
        } else {
            return [false, this.usDateValidator.err];
        }
    }

    // Getter para obter a data no formato US
    get usDate() {
        return this.usDateValidator.usDate;
    }

    // Setter para definir a data no formato US e validar
    set usDate(usDateInput) {
        // Define a data no formato US e verifica se é válida, retornando o resultado e a mensagem de erro, se houver
        if ((this.usDateValidator.usDate = usDateInput) === true) {
            return [true, this.usDateValidator.err];
        } else {
            return [false, this.usDateValidator.err];
        }
    }

    // Método para validar o nome de usuário
    validateUsername() {
        // Verifica se o nome de usuário é válido e retorna o resultado e a mensagem de erro, se houver
        if (this.usernameValidator.isUsernameTrue()) {
            return [true, this.usernameValidator.err];
        } else {
            return [false, this.usernameValidator.err];
        }
    }

    // Getter para obter o nome de usuário
    get username() {
        return this.usernameValidator.username;
    }

    // Setter para definir o nome de usuário e validar
    set username(usernameInput) {
        // Define o nome de usuário e verifica se é válido, retornando o resultado e a mensagem de erro, se houver
        if ((this.usernameValidator.username = usernameInput) === true) {
            return [true, this.usernameValidator.err];
        } else {
            return [false, this.usernameValidator.err];
        }
    }
}

// Exporta a classe FormsValidator como um módulo CommonJS
module.exports = BrFormsValidator;