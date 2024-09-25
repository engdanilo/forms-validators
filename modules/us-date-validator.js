// Description: This file contains the DateValidator class. This class is responsible for validating the date format, checking if the day exists and if it is a leap year.
// The date should be in the format dd/mm/yyyy.
// The day should exist in the month.
// The year should be a leap year if the date is 29/02.

<<<<<<< HEAD
class UsDateValidator{

    constructor(date){
        this._date = date.trim();
    }

    get date(){
        return this._date;
    }

    set date(setDate){
        let date = new UsDateValidator(setDate);
        if(!date.dateIsValid()) return false;
        this._date = setDate.trim();
    }

    // check if the date is in the format dd/mm/yyyy
    dateFormatIsValid(){

        // regex to check the date format
        const dateRegex = /^(0[0-9]|1[0-2])\/(0[0-9]|1[0-9]|2[0-9]|3[0-2])\/(19[0-9]{2,}|20[0-9]{2,})$/;

        if(!dateRegex.test(this._date)){
            return false;
        }
        return true;
    }

    theDayExists(){

        // An array of wrong dates
        const wrongDate = ['04/31', '06/31', '09/31', '11/31', '02/30', '31/02'];

        // check if the day exists in the month
        if(wrongDate.includes(this._date.substring(0,5))){
            return false;
        }
        return true;
    }

    isLeapYear(){

        const year = parseInt(this._date.substring(6,10));
        const date = this._date.substring(0,5);

        // If the user inputs 29/02, check if it is a leap year
        if(date === '02/29'){
            if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
                return true;
            } else {
                return false;
            }
        }
        return true;
    }

    dateIsValid(){
        if(!this.dateFormatIsValid() || !this.theDayExists() || !this.isLeapYear()){
            return false;
        }
=======
// Define the UsDateValidator class to validate US date formats
class UsDateValidator {

    // Constructor to initialize the date and error message
    constructor(date) {
        // Trim the input date and assign it to the private _date property
        this._date = date.trim();
        // Initialize an error message property
        this.err = '';
    }

    // Getter method to retrieve the date
    get date() {
        return this._date;
    }

    // Setter method to update the date
    set date(setDate) {
        // Create a new instance of UsDateValidator with the input date
        let date = new UsDateValidator(setDate);
        // Validate the new date
        if (!date.dateIsValid()) {
            // Set the error message if the date is invalid
            this.err = 'The date should be in the format dd/mm/yyyy and should be a valid date.';
            return false;
        }
        // Trim and set the new date if it's valid
        this._date = setDate.trim();
    }

    // Method to check if the date is in the format dd/mm/yyyy
    dateFormatIsValid() {
        // Regular expression to check the date format
        const dateRegex = /^(0[0-9]|1[0-2])\/(0[0-9]|1[0-9]|2[0-9]|3[0-2])\/(19[0-9]{2,}|20[0-9]{2,})$/;

        // Test the date against the regular expression
        if (!dateRegex.test(this._date)) {
            // Set the error message if the date format is invalid
            this.err = 'The date should be in the format dd/mm/yyyy.';
            return false;
        }
        // Return true if the date format is valid
        return true;
    }

    // Method to check if the day exists in the month
    theDayExists() {
        // An array of invalid dates
        const wrongDate = ['04/31', '06/31', '09/31', '11/31', '02/30', '31/02'];

        // Check if the day exists in the month
        if (wrongDate.includes(this._date.substring(0, 5))) {
            // Set the error message if the day does not exist in the month
            this.err = 'The day does not exist in the month.';
            return false;
        }
        // Return true if the day exists in the month
        return true;
    }

    // Method to check if the year is a leap year
    isLeapYear() {
        // Extract the year from the date
        const year = parseInt(this._date.substring(6, 10));
        // Extract the month and day from the date
        const date = this._date.substring(0, 5);

        // If the user inputs 29/02, check if it is a leap year
        if (date === '02/29') {
            // Check if the year is a leap year
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                return true;
            } else {
                // Set the error message if the year is not a leap year
                this.err = 'The year should be a leap year.';
                return false;
            }
        }
        // Return true if the year is a leap year or the date is not 29/02
        return true;
    }

    // Method to validate the date
    dateIsValid() {
        // Check if the date format is valid, the day exists, and the year is a leap year if necessary
        if (!this.dateFormatIsValid() || !this.theDayExists() || !this.isLeapYear()) {
            return false;
        }
        // Return true if the date is valid
        this.err = '';
>>>>>>> origin/master
        return true;
    }
}

<<<<<<< HEAD
module.exports = DateValidator;
=======
// Export the UsDateValidator class as a module
module.exports = UsDateValidator;
>>>>>>> origin/master

// test the code
// let date = new DateValidator('29/02/2020'); // should return true
// console.log(date.dateIsValid());
// date = new DateValidator('29/02/2021'); // should return false
// console.log(date.dateIsValid());
// date = new DateValidator('31/04/21'); // should return false
// console.log(date.dateIsValid());
