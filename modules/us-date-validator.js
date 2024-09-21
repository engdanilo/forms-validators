// Description: This file contains the DateValidator class. This class is responsible for validating the date format, checking if the day exists and if it is a leap year.
// The date should be in the format dd/mm/yyyy.
// The day should exist in the month.
// The year should be a leap year if the date is 29/02.

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
        return true;
    }
}

module.exports = DateValidator;

// test the code
// let date = new DateValidator('29/02/2020'); // should return true
// console.log(date.dateIsValid());
// date = new DateValidator('29/02/2021'); // should return false
// console.log(date.dateIsValid());
// date = new DateValidator('31/04/21'); // should return false
// console.log(date.dateIsValid());
