// Global Constants

const WAGE_PER_HOUR = 20;
const HOURS_PER_FULL_DAY = 8;
const HOURS_PER_HALF_DAY = 4;


if (Math.floor(Math.random() * 10) % 2 == 0) {
    console.log('Employee is Absent.');    
} else {
    if (Math.floor(Math.random() * 10) % 2 == 0){
        console.log('Employee earned Rs.', WAGE_PER_HOUR*HOURS_PER_HALF_DAY, 'for half day of work.');
    }
    else{
        console.log('Employee earned Rs.', WAGE_PER_HOUR*HOURS_PER_FULL_DAY, 'for full day of work.');
    }
}