const cnpj = Symbol('cnpj');
const cnpjSymbol = Symbol('cnpjSymbol');
const cnpjLastDigits = Symbol('cnpjLastDigits');

class CnpjValidator {

    constructor(cnpjInput){
        this[cnpj] = cnpjInput.trim();
        this[cnpjSymbol] = [];
        this[cnpjLastDigits] = [];

    }

    get cnpj(){
        return this[cnpj];
    }

    get cnpjArray(){
        if(this[cnpjSymbol].length === 0){
            this.cnpjOrganizer();
        }
        return this[cnpjSymbol];
    }

    get cnpjLastDigitsValid(){
        if(this[cnpjLastDigits].length === 0){
            this.isCnpjLastDigitsValid();
        }
        return this[cnpjLastDigits];
    }

    cnpjOrganizer(){
        if(typeof this[cnpj] !== 'string'){
            throw new Error('The CNPJ must be a string');
        }
        this[cnpjSymbol] = this[cnpj].replace(/[./-]/g, '').split('').map(Number);
    }

    isCnpjFormatValid(){
        this.cnpjOrganizer();
        if(this[cnpjSymbol].length !== 14) return false;
        if(String(this[cnpjSymbol]).match(/(\d)\1{13}/)) return false;
        if(this[cnpjSymbol].some(isNaN)) return false;
        return true;
    }

    isCnpjLastDigitsValid(){

        if(!this.isCnpjFormatValid()) return false;

        let cnpjArray = this[cnpjSymbol].slice(0,12);

        const multipliers1 = [5,4,3,2,9,8,7,6,5,4,3,2];
        const multipliers2 = [6,5,4,3,2,9,8,7,6,5,4,3,2];

        let sumFirstDigit = cnpjArray.reduce((acc, value, index) => {
            acc += value * multipliers1[index];
            return acc;
        }, 0);

        let firstDigit = 11 - sumFirstDigit % 11;
        if(firstDigit > 9) firstDigit = 0;

        let sumSecondDigit = cnpjArray.reduce((acc, value, index) => {
            acc += value * multipliers2[index];
            return acc;
        }, 0);

        let secondDigit = 11 - sumSecondDigit % 11;
        if(secondDigit > 9) secondDigit = 0;

        this[cnpjLastDigits] = [firstDigit, secondDigit];
        return true;
    }

    isCnpjTrue(){
        if(!this.isCnpjLastDigitsValid()) return false;
        
        const validator1 = [...this[cnpj].split('').slice(-2)].map(Number);
        if(validator1[0] === this[cnpjLastDigits][0] && validator1[1] === this[cnpjLastDigits][1]){
            return true;
        }
        return false;
    }
}

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
