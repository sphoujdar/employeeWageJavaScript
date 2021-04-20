// Global Constants

const WAGE_PER_HOUR = 20;
const HOURS_PER_FULL_DAY = 8;



if (Math.floor(Math.random() * 10) % 2 == 0) {
    console.log('Employee is Absent.');    
} else {
    console.log('Employee earned Rs.', WAGE_PER_HOUR*HOURS_PER_FULL_DAY, 'for full day of work.');
}