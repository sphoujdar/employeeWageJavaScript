// Global Constants

const WAGE_PER_HOUR = 20;
const HOURS_PER_FULL_DAY = 8;
const HOURS_PER_HALF_DAY = 4;
const WORKING_DAYS_IN_A_MONTH = 20;
const MAX_WORKING_HOURS_PER_MONTH = 100;

// Local Vars
var employeeWageForTheMonth = 0;
var dailyHoursLog = [];


for (let days = 0; days < WORKING_DAYS_IN_A_MONTH; days++) {
    console.log('Day ',days+1,':');
    if (Math.floor(Math.random() * 10) % 2 == 0) {
        console.log('Employee is Absent.');    
        dailyHoursLog.push(0);
    } else if (getWorkHours() >= MAX_WORKING_HOURS_PER_MONTH){
        console.log('Employee cannot work today as Max working hours achieved.');    
        dailyHoursLog.push(0);
    } else {
        let currentWage = 0;
        switch(Math.floor(Math.random() * 10) % 2){
            case 0:
                dailyHoursLog.push(HOURS_PER_HALF_DAY);
                currentWage = WAGE_PER_HOUR*HOURS_PER_HALF_DAY;
                console.log('Employee earned Rs.', currentWage, ' for half day of work.');
                break;
            default:
                dailyHoursLog.push(HOURS_PER_FULL_DAY);
                currentWage = WAGE_PER_HOUR*HOURS_PER_FULL_DAY;
                console.log('Employee earned Rs.', currentWage, ' for full day of work.');
        }
        employeeWageForTheMonth+=currentWage;
    }   
}
console.log('Employee Worked for a total of ',getWorkHours(),' hours this month.');
console.log('Total Employee Wage for the month is: Rs.',employeeWageForTheMonth,'.');

function getWorkHours(){
    let hoursWorkedTillNow = 0;
    dailyHoursLog.forEach((item) => {
        hoursWorkedTillNow+=item;
    })
    return hoursWorkedTillNow;
}