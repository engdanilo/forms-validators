<<<<<<< HEAD
# FormsValidator

## Overview

FormsValidator is a comprehensive JavaScript library designed to validate various types of form inputs. This library provides a robust set of validators for common form fields such as CNPJ, CPF, email, name, date, and username. It ensures that the data entered by users meets the required format and constraints, making it easier to handle form validation in web applications.

This module is primarily targeted at Brazilian users, as it includes specific validations for Brazilian documents such as CNPJ and CPF. However, it can also be used by people from other countries. Pull requests for the inclusion of validations for documents from other countries are welcome.

All documentation for the module can be found on GitHub: [FormsValidator Documentation](https://github.com/engdanilo/forms-validators).

## Features

- **CNPJ Validation**: Validates Brazilian CNPJ numbers.
- **CPF Validation**: Validates Brazilian CPF numbers.
- **Email Validation**: Ensures the email address is in the correct format.
- **Name Validation**: Validates first name and surname.
- **Date Validation**: Validates dates in both Brazilian and US formats.
- **Username Validation**: Ensures the username meets specified length constraints.

## Installation

To install FormsValidator, you can use the following commands: 

### Install as a Dependency

```bash
npm install brformsvalidator
```

### Install as a Production Dependency

```bash
npm install brformsvalidator --save
```

### Install as a Development Dependency

```bash
npm install brformsvalidator --save-dev
```

## Usage

You can create an instance of FormsValidator by passing the form input values to the constructor. It is possible to create an instance without using all parameters because the remaining parameters will be ignored due to having default falsy values. This allows you to use the module for specific validations such as only CPF and name, only CPF, only email, etc.

### Importing the Module

To import the module in Node.js, assuming you have installed it via npm in the node_modules folder, use the following code:

```javascript
const FormsValidator = require('formsvalidator');
```

### Example

```javascript
const formValidator = new FormsValidator('11.444.777/0001-61', '123.456.789-09', 'example@example.com', 'John', 'Doe', '01/01/2000', '01/01/2000', 'johndoe');

console.log(formValidator.validateCnpj()); // true or false
console.log(formValidator.cnpj); // Formatted CNPJ

console.log(formValidator.validateCpf()); // true or false
console.log(formValidator.cpf); // Formatted CPF

console.log(formValidator.validateEmail()); // true or false
console.log(formValidator.email); // Email address

console.log(formValidator.validateName()); // true or false
console.log(formValidator.completeName); // Full name

console.log(formValidator.validateDate()); // true or false
console.log(formValidator.date); // Date

console.log(formValidator.validateUsDate()); // true or false
console.log(formValidator.usDate); // US Date

console.log(formValidator.validateUsername()); // true or false
console.log(formValidator.username); // Username
```

### Using Only Specific Validators

You can also create an instance of FormsValidator with only the parameters you need:

#### Example: Only CPF and Name

```javascript
const formValidator = new FormsValidator('', '123.456.789-09', '', 'John', 'Doe');

console.log(formValidator.validateCpf()); // true or false
console.log(formValidator.cpf); // Formatted CPF

console.log(formValidator.validateName()); // true or false
console.log(formValidator.completeName); // Full name
```

#### Example: Only Email

```javascript
const formValidator = new FormsValidator('', '', 'example@example.com');

console.log(formValidator.validateEmail()); // true or false
console.log(formValidator.email); // Email address
```

### Methods and Properties

#### CNPJ

- **validateCnpj()**: Validates the CNPJ.
- **cnpj**: Returns the formatted CNPJ.

#### CPF

- **validateCpf()**: Validates the CPF.
- **cpf**: Returns the formatted CPF.

#### Email

- **validateEmail()**: Validates the email address.
- **email**: Gets or sets the email address.

#### Name

- **validateName()**: Validates the name.
- **name**: Gets or sets the first name.
- **surname**: Gets or sets the surname.
- **completeName**: Returns the full name (first name + surname).

#### Date

- **validateDate()**: Validates the date in Brazilian format.
- **date**: Gets or sets the date.

#### US Date

- **validateUsDate()**: Validates the date in US format.
- **usDate**: Gets or sets the US date.

#### Username

- **validateUsername()**: Validates the username.
- **username**: Gets or sets the username.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any changes or improvements. We especially encourage contributions for the inclusion of validations for documents from other countries.

## License

This project is licensed under the MIT License.

---
=======
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

```sh
npm install brformsvalidator
npm install brformsvalidator --save
npm install brformsvalidator --save-br
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
>>>>>>> origin/master
