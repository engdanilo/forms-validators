// Description: This file contains the code to validate a CPF (Cadastro de Pessoas Físicas) number.
// The CPF is a unique identifier for each citizen in Brazil. It is composed of 11 digits,
// and the last two digits are the validation digits. The first 9 digits are used to calculate the last two digits.
// The first digit is calculated by multiplying the first 9 digits by 10, 9, 8, 7, 6, 5, 4, 3, 2, and then summing the results.
// The sum is then divided by 11, and the remainder is subtracted from 11 to get the first digit.
// If the result is greater than 9, the first digit is 0.
// The second digit is calculated by multiplying the first 9 digits by 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, and then summing the results.
// The sum is then divided by 11, and the remainder is subtracted from 11 to get the second digit.
// If the result is greater than 9, the second digit is 0.
// The last two digits of the CPF must match the calculated digits to be valid.
// The code in this file validates the CPF number and checks if the last two digits are correct.

// ________________________Symbols________________________
const cpfSymbol = Symbol('cpfSymbol');
const cpfLastDigits = Symbol('cpfLastDigits');

// ________________________Class________________________
class CpfValidator {
    
    // IMPORTANT! The CPF need to be a string
    // The constructor receives a CPF as a string
    constructor(cpf){
        this.cpf = cpf.trim();
        this[cpfSymbol] = [];
        this[cpfLastDigits] = [];
    }

    // ________________________Getters________________________
    // Getter to return the CPF as an array of numbers
    get cpfArray(){
        return this[cpfSymbol];
    }

    // Getter to return the CPF with the format 'xxx.xxx.xxx-xx'
    get validCpf(){
        const cpfString = this[cpfSymbol].join('');
        const formatedCpf = `${cpfString.slice(0,3)}.${cpfString.slice(3,6)}.${cpfString.slice(6,9)}-${cpfString.slice(9, 11)}`;
        return formatedCpf;
    }

    // Getter to return the last two digits of a valid cpf with the first 9 digits
    get cpfLastDigitsValid(){
        return this[cpfLastDigits];
    }

    // ________________________Methods________________________
    // Method to organize the cpf string into an array of numbers
    cpfOrganizer(){
        this[cpfSymbol] = this.cpf.replace(/[.-]/g, '').split('').map(Number);
    }

    // Method to check if the cpf format is valid
    isCpfFormatValid(){
        // First apply the cpfOrganizer method to get the cpf as an array of numbers
        this.cpfOrganizer();
        // Now, we check if the cpf has 11 digits, if it has any repeated digit, 
        // and if it has any non-numeric character
        if(this[cpfSymbol].length !== 11) return false;
        if(String(this[cpfSymbol]).match(/(\d)\1{10}/)) return false;
        if(this[cpfSymbol].some(isNaN)) return false;
        // If all the conditions are met, we return true
        return true;
    }

    // Method to check if the last two digits of the cpf are valid
    isCpfLastDigitsValid(){
        // first, we need to check if the cpf is in the right format.
        // if it is not, we return false.
        if(!this.isCpfFormatValid()) return false;
        // Then, we get the first 9 digits of the cpf
        let cpfArray = this[cpfSymbol].slice(0, 9).map(Number);
        let firstMultiplier = 10;
        let secondMultiplier = 11;
        // Now, we calculate the first digit of the cpf
        let sumFirstMultiplier = cpfArray.reduce((acc, value) =>{
            acc += value * firstMultiplier;
            firstMultiplier--;
            return acc;
        }, 0);
        // If the first digit is greater than 9, we set it to 0
        let firstDigit = 11 - (sumFirstMultiplier % 11);
        if(firstDigit > 9) firstDigit = 0;
        // Now, we calculate the second digit of the cpf
        let sumSecondMultiplier = cpfArray.reduce((acc, value) =>{
            acc += value * secondMultiplier;
            secondMultiplier--;
            return acc;
        }, 0);
        sumSecondMultiplier += firstDigit * 2;
        // If the second digit is greater than 9, we set it to 0
        let secondDigit = 11 - (sumSecondMultiplier % 11);
        if(secondDigit > 9) secondDigit = 0;
        this[cpfLastDigits] = [firstDigit, secondDigit];
        // We need to return true to validate this method and the next method
        // and indicate that this method could calculate the last two digits of the cpf
        return true;
    }

    // Method to check if the cpf is valid
    isCpfTrue(){
        // First, we need to check if the cpf is in the right format.
        if(!this.isCpfLastDigitsValid()) return false;
        const validator1 = [...this.cpf.slice(-2)].map(Number);
        if(validator1[0] === this.cpfLastDigitsValid[0] && validator1[1] === this.cpfLastDigitsValid[1]){
            return true;
        } else {
            return false;
        }
    }
}


// To check if the cpf is valid, you can use the following code:
//const newCpf = new CpfValidator('123.456.789-09');
//console.log(newCpf.isCpfTrue());

// If you want to get the last two 
//console.log(newCpf.cpfLastDigitsValid);

// If you just want to change cpf string to an array of numbers, you can use the following code:
//console.log(newCpf.cpfArray);

// If you want to get the cpf with the format 'xxx.xxx.xxx-xx', you can use the following code:
//console.log(newCpf.validCpf);

module.exports = CpfValidator;
