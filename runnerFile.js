// Global Constants

const WAGE_PER_HOUR = 20;
const HOURS_PER_FULL_DAY = 8;
const HOURS_PER_HALF_DAY = 4;
const WORKING_DAYS_IN_A_MONTH = 20;

var employeeWageForTheMonth = 0;
for (let days = 0; days < WORKING_DAYS_IN_A_MONTH; days++) {
    console.log('Day ',days+1,':');
    if (Math.floor(Math.random() * 10) % 2 == 0) {
        console.log('Employee is Absent.');    
    } else {
        let currentWage = 0;
        switch(Math.floor(Math.random() * 10) % 2){
            case 0:
                currentWage = WAGE_PER_HOUR*HOURS_PER_HALF_DAY;
                console.log('Employee earned Rs.', currentWage, 'for half day of work.');
                break;
            default:
                currentWage = WAGE_PER_HOUR*HOURS_PER_FULL_DAY;
                console.log('Employee earned Rs.', currentWage, 'for full day of work.');
        }
        employeeWageForTheMonth+=currentWage;
    }   
}
console.log('Total Employee Wage for the month is: Rs.',employeeWageForTheMonth,'.');