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
npm install formsvalidator
```

### Install as a Production Dependency

```bash
npm install formsvalidator --save
```

### Install as a Development Dependency

```bash
npm install formsvalidator --save-dev
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