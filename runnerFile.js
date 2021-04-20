// Global Constants

const WAGE_PER_HOUR = 20;
const HOURS_PER_FULL_DAY = 8;
const HOURS_PER_HALF_DAY = 4;
const WORKING_DAYS_IN_A_MONTH = 20;
const MAX_WORKING_HOURS_PER_MONTH = 100;

// Local Vars
var employeeWageForTheMonth = 0;
var dailyEmployeeLog = [];                      // should contain {day, attendance, workedHours, wage} objects

for (let days = 0; days < WORKING_DAYS_IN_A_MONTH; days++) {
    let currentDayLog;
    let currentWage = 0;
    if (getWorkHours() >= MAX_WORKING_HOURS_PER_MONTH){
        currentDayLog = {"day" : days+1, "attendance": true, "workedHours" : 0, "wage" : 0}
        dailyEmployeeLog.push(currentDayLog);
        break;
    } 
    switch(generateWholeNumber(0,3)){
        case 0:
            currentWage = WAGE_PER_HOUR*HOURS_PER_HALF_DAY;    
            currentDayLog = {"day" : days+1, "attendance": true, "workedHours" : HOURS_PER_HALF_DAY, "wage" : currentWage}
            dailyEmployeeLog.push(currentDayLog);
            break;
        case 1:
            currentWage = WAGE_PER_HOUR*HOURS_PER_FULL_DAY;
            currentDayLog = {"day" : days+1, "attendance": true, "workedHours" : HOURS_PER_FULL_DAY, "wage" : currentWage}
            dailyEmployeeLog.push(currentDayLog);
            break;
        case 2:
            currentDayLog = {"day" : days+1, "attendance": false, "workedHours" : 0, "wage" : 0};
            dailyEmployeeLog.push(currentDayLog);  
            break;
        default:
            console.log('Something went wrong.');
    }   
}
logTotal = {"day" : 0, "attendance": true, "workedHours" : getWorkHours(), "wage" : getTotalWage()};
dailyEmployeeLog.push(logTotal);

displayEmployeeLog();

//Functions

function generateWholeNumber(startNumber, numberOfChoices){
    return Math.floor(Math.random() * 10) % numberOfChoices + startNumber;
}

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
            console.log("Total Wage earned in this month : Rs." + item.wage + " in " + item.workedHours + " hours.");
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