

// Global Constants

const WAGE_PER_HOUR = 20;
const HOURS_PER_FULL_DAY = 8;
const HOURS_PER_HALF_DAY = 4;
const WORKING_DAYS_IN_A_MONTH = 20;
const MAX_WORKING_HOURS_PER_MONTH = 100;

// Local Vars
var employeeWageForTheMonth = 0;
var dailyEmployeeLog = [];

// day, workedHours, Wage

for (let days = 0; days < WORKING_DAYS_IN_A_MONTH; days++) {
    console.log('Day ',days+1,':');
    let currentDayLog;
    if (Math.floor(Math.random() * 10) % 2 == 0) {
        currentDayLog = {"day" : days+1, "attendance": false, "workedHours" : 0, "wage" : 0}
        dailyEmployeeLog.push(currentDayLog);
        console.log('Employee is Absent.');    
    } else if (getWorkHours() >= MAX_WORKING_HOURS_PER_MONTH){
        let currentDayLog = {"day" : days+1, "attendance": true, "workedHours" : 0, "wage" : 0}
        dailyEmployeeLog.push(currentDayLog);
        console.log('Employee cannot work today as Max working hours achieved.');
    } else {
        let currentWage = 0;
        switch(Math.floor(Math.random() * 10) % 2){
            case 0:
                currentWage = WAGE_PER_HOUR*HOURS_PER_HALF_DAY;    
                currentDayLog = {"day" : days+1, "attendance": true, "workedHours" : HOURS_PER_HALF_DAY, "wage" : currentWage}
                dailyEmployeeLog.push(currentDayLog);
                console.log('Employee earned Rs.', currentWage, ' for half day of work.');
                break;
            default:
                currentWage = WAGE_PER_HOUR*HOURS_PER_FULL_DAY;
                currentDayLog = {"day" : days+1, "attendance": true, "workedHours" : HOURS_PER_FULL_DAY, "wage" : currentWage}
                dailyEmployeeLog.push(currentDayLog);
                console.log('Employee earned Rs.', currentWage, ' for full day of work.');
        }
        employeeWageForTheMonth+=currentWage;
    }   
}
console.log('Employee Worked for a total of ',getWorkHours(),' hours this month.');
console.log('Total Employee Wage for the month is: Rs.',employeeWageForTheMonth,'.');

function getWorkHours(){
    let hoursWorkedTillNow = 0;
    dailyEmployeeLog.forEach((item) => {
        hoursWorkedTillNow+=item;
    })
    return hoursWorkedTillNow;
}

function displayEmployeeLog(){
    dailyEmployeeLog.forEach((item) => {
        process.stdout.write("Day" + item.day + ": ");
        if(item.attendance){
            console.log("Present for " + item.workedHours + " hours earned Rs." + item.wage);
        } else{
            console.log("Absent : earned Rs." + item.wage);
        }
    })
}

displayEmployeeLog();