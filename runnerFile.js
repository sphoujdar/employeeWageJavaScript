

// Global Constants

const WAGE_PER_HOUR = 20;
const HOURS_PER_FULL_DAY = 8;
const HOURS_PER_HALF_DAY = 4;
const WORKING_DAYS_IN_A_MONTH = 20;
const MAX_WORKING_HOURS_PER_MONTH = 50;

// Local Vars
var employeeWageForTheMonth = 0;
var dailyEmployeeLog = [];                      // should contain {day, attendance, workedHours, wage} ojects



for (let days = 0; days < WORKING_DAYS_IN_A_MONTH; days++) {
    let currentDayLog;
    if (Math.floor(Math.random() * 10) % 2 == 0) {
        currentDayLog = {"day" : days+1, "attendance": false, "workedHours" : 0, "wage" : 0}
        dailyEmployeeLog.push(currentDayLog);  
    } else if (getWorkHours() >= MAX_WORKING_HOURS_PER_MONTH){
        currentDayLog = {"day" : days+1, "attendance": true, "workedHours" : 0, "wage" : 0}
        dailyEmployeeLog.push(currentDayLog);
    } else {
        let currentWage = 0;
        switch(Math.floor(Math.random() * 10) % 2){
            case 0:
                currentWage = WAGE_PER_HOUR*HOURS_PER_HALF_DAY;    
                currentDayLog = {"day" : days+1, "attendance": true, "workedHours" : HOURS_PER_HALF_DAY, "wage" : currentWage}
                dailyEmployeeLog.push(currentDayLog);
                break;
            default:
                currentWage = WAGE_PER_HOUR*HOURS_PER_FULL_DAY;
                currentDayLog = {"day" : days+1, "attendance": true, "workedHours" : HOURS_PER_FULL_DAY, "wage" : currentWage}
                dailyEmployeeLog.push(currentDayLog);
        }
    }   
}
logTotal = {"day" : 0, "attendance": true, "workedHours" : getWorkHours(), "wage" : getTotalWage()};
dailyEmployeeLog.push(logTotal);
//console.log('Employee Worked for a total of ',getWorkHours(),' hours this month.');
//console.log('Total Employee Wage for the month is: Rs.',  ,'.');

displayEmployeeLog();
//console.log(dailyEmployeeLog);

function getWorkHours(){
    let hoursWorkedTillNow = 0;
    dailyEmployeeLog.forEach((item) => {
        hoursWorkedTillNow+=item.workedHours;
    })
    return hoursWorkedTillNow;
}

function getTotalWage(){
    let wageEarnedTillNow = 0;
    dailyEmployeeLog.forEach((item) => {
        wageEarnedTillNow+=item.wage;
    })
    return wageEarnedTillNow;
}

function displayEmployeeLog(){
    dailyEmployeeLog.forEach((item) => {
        if(item.day == 0){
            console.log("Monthly Total Wage: " + item.wage);
        }else {
            process.stdout.write("Day " + item.day + ": ");
        if(item.attendance){
            console.log("Present for " + item.workedHours + " hours earned Rs." + item.wage);
        } else{
            console.log("Absent : earned Rs." + item.wage);
        }
        }
    })
}