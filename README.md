# **BrFormsValidator**

## **Overview**
BrFormsValidator is a comprehensive library designed to validate various types of Brazilian forms data, including CNPJ, CPF, email, name, date, US date, and username. This module ensures that your form inputs are correctly formatted and valid according to Brazilian standards.

## **Features**
- Validate CNPJ
- Validate CPF
- Validate email
- Validate name and surname
- Validate date in Brazilian format
- Validate date in US format
- Validate username with customizable length

## **Installation**
To install BrFormsValidator, you can use npm with the following commands:

### Default Instalation
```sh
npm install brformsvalidator
```
### Instalation As Production Dependencie
```sh
npm install brformsvalidator --save
```
### Instalation As Dev Dependencie
```sh
npm install brformsvalidator --save-dev
```

## **Usage**

### **Importing the Module**
To use BrFormsValidator in your project, you need to import it as follows:

```javascript
const BrFormsValidator = require('brformsvalidator');
```

### **Examples**

#### **Using the Full Validator**
```javascript
const BrFormsValidator = require('brformsvalidator');

const validator = new BrFormsValidator('12345678000195', '12345678909', 'test@example.com', 'John', 'Doe', '01/01/2000',

 '

01/01/2000', 'username123');

// Validate CNPJ
const [isCnpjValid, cnpjError] = validator.validateCnpj();
console.log(isCnpjValid, cnpjError);

// Validate CPF
const [isCpfValid, cpfError] = validator.validateCpf();
console.log(isCpfValid, cpfError);

// Validate email
const [isEmailValid, emailError] = validator.validateEmail();
console.log(isEmailValid, emailError);

// Validate name
const [isNameValid, nameError] = validator.validateName();
console.log(isNameValid, nameError);

// Validate date
const [isDateValid, dateError] = validator.validateDate();
console.log(isDateValid, dateError);

// Validate US date
const [isUsDateValid, usDateError] = validator.validateUsDate();
console.log(isUsDateValid, usDateError);

// Validate username
const [isUsernameValid, usernameError] = validator.validateUsername();
console.log(isUsernameValid, usernameError);
```

### **Using Only Specific Validators**

#### **Example: Only CPF**
```javascript
const BrFormsValidator = require('brformsvalidator');

const cpfValidator = new BrFormsValidator('', '12345678909');

const [isCpfValid, cpfError] = cpfValidator.validateCpf();
console.log(isCpfValid, cpfError);
```

#### **Example: Only Email**
```javascript
const BrFormsValidator = require('brformsvalidator');

const emailValidator = new BrFormsValidator('', '', 'test@example.com');

const [isEmailValid, emailError] = emailValidator.validateEmail();
console.log(isEmailValid, emailError);
```

## **Methods and Properties**
- `validateCnpj()`: Validates the CNPJ.
- `validateCpf()`: Validates the CPF.
- `validateEmail()`: Validates the email.
- `validateName()`: Validates the name and surname.
- `validateDate()`: Validates the date in Brazilian format.
- `validateUsDate()`: Validates the date in US format.
- `validateUsername()`: Validates the username.

## **Contributing**
We welcome contributions from the community. If you would like to contribute, please fork the repository and submit a pull request.

## **License**
This project is licensed under the MIT License.

## **Author**
- **Name**: Danilo Santana
- **Username**: engdanilo

## **Contributors**
Currently, the only contributor is the author, Danilo Santana.
