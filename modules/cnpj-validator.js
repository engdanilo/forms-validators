// Define unique symbols for the CNPJ properties to ensure they are private
const cnpj = Symbol('cnpj');
const cnpjSymbol = Symbol('cnpjSymbol');
const cnpjLastDigits = Symbol('cnpjLastDigits');

// Define the CnpjValidator class to validate CNPJ numbers
class CnpjValidator {

    // Constructor to initialize the CNPJ input and error message
    constructor(cnpjInput){
        // Trim the input CNPJ and assign it to the private cnpj property
        this[cnpj] = cnpjInput.trim();
        // Initialize an array to store the CNPJ digits
        this[cnpjSymbol] = [];
        // Initialize an array to store the last two digits of the CNPJ
        this[cnpjLastDigits] = [];
        // Initialize an error message property
        this.err = '';
    }

    // Getter method to retrieve the CNPJ
    get cnpj(){
        return this[cnpj];
    }

    // Getter method to retrieve the CNPJ as an array of digits
    get cnpjArray(){
        // If the cnpjSymbol array is empty, organize the CNPJ
        if(this[cnpjSymbol].length === 0){
            this.cnpjOrganizer();
        }
        return this[cnpjSymbol];
    }

    // Getter method to retrieve the last two digits of the CNPJ
    get cnpjLastDigitsValid(){
        // If the cnpjLastDigits array is empty, validate the last digits
        if(this[cnpjLastDigits].length === 0){
            this.isCnpjLastDigitsValid();
        }
        return this[cnpjLastDigits];
    }

    // Method to organize the CNPJ by removing special characters and converting to an array of numbers
    cnpjOrganizer(){
        // Check if the CNPJ is a string
        if(typeof this[cnpj] !== 'string'){
            this.err = 'The CNPJ must be a string';
            return false;
        }
        // Remove special characters and convert to an array of numbers
        this[cnpjSymbol] = this[cnpj].replace(/[./-]/g, '').split('').map(Number);
        return true;
    }

    // Method to validate the format of the CNPJ
    isCnpjFormatValid(){
        // Organize the CNPJ and check if it was successful
        if(!this.cnpjOrganizer()) return false;
        // Check if the CNPJ has 14 digits
        if(this[cnpjSymbol].length !== 14) {
            this.err = 'The CNPJ must have 14 digits';
            return false;
        }
        // Check if the CNPJ has repeated digits
        if(String(this[cnpjSymbol]).match(/(\d)\1{13}/)) {
            this.err = 'The CNPJ must not have repeated digits';
            return false;
        }
        // Check if the CNPJ contains only numbers
        if(this[cnpjSymbol].some(isNaN)) {
            this.err = 'The CNPJ must have only numbers';
            return false;
        }
        return true;
    }

    // Method to validate the last two digits of the CNPJ
    isCnpjLastDigitsValid(){
        // Check if the CNPJ format is valid
        if(!this.isCnpjFormatValid()) return false;

        // Get the first 12 digits of the CNPJ
        let cnpjArray = this[cnpjSymbol].slice(0, 12);

        // Define the multipliers for the first and second digits
        const multipliers1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const multipliers2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        // Calculate the sum for the first digit
        let sumFirstDigit = cnpjArray.reduce((acc, value, index) => {
            acc += value * multipliers1[index];
            return acc;
        }, 0);

        // Calculate the first digit
        let firstDigit = 11 - sumFirstDigit % 11;
        if(firstDigit > 9) firstDigit = 0;

        // Add the first digit to the CNPJ array
        cnpjArray.push(firstDigit);

        // Calculate the sum for the second digit
        let sumSecondDigit = cnpjArray.reduce((acc, value, index) => {
            acc += value * multipliers2[index];
            return acc;
        }, 0);

        // Calculate the second digit
        let secondDigit = 11 - sumSecondDigit % 11;
        if(secondDigit > 9) secondDigit = 0;

        // Set the last two digits of the CNPJ
        this[cnpjLastDigits] = [firstDigit, secondDigit];
        return true;
    }

    // Method to check if the CNPJ is valid
    isCnpjTrue(){
        // Check if the last two digits of the CNPJ are valid
        if(!this.isCnpjLastDigitsValid()) return false;

        // Get the last two digits of the input CNPJ
        const validator1 = [...this[cnpj].split('').slice(-2)].map(Number);
        // Check if the last two digits match the calculated digits
        if(validator1[0] === this[cnpjLastDigits][0] && validator1[1] === this[cnpjLastDigits][1]){
            this.err = '';
            return true;
        }
        this.err = 'The CNPJ is not valid';
        return false;
    }
}

// Export the CnpjValidator class as an ES module
module.exports = CnpjValidator;

// // To check if the cnpj is valid, you can use the following code:
// const newCnpj = new CnpjValidator('11.444.777/0001-62');
// console.log(`The Cnpj validation returned ${newCnpj.isCnpjTrue()}`);

// console.log(`The Cnpj format is ${newCnpj.isCnpjFormatValid()}`);

// // If you want to get the last two 
// console.log(`The Cnpj last digits is ${newCnpj.cnpjLastDigitsValid}`);

// // If you just want to change cnpj string to an array of numbers, you can use the following code:
// console.log(newCnpj.cnpjArray);

// // If you want to get the cnpj with the format 'xxx.xxx.xxx-xx', you can use the following code:
// console.log(newCnpj.cnpj);
