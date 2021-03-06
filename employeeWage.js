let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let MAX_HRS_IN_MONTH = 10;
let EMP_RATE_PER_HOUR = 20;
let NUM_OF_WORKING_DAYS = 2;

let empHrs = 0;
let totalEmpHrs = 0;
let totalWage = 0;
let totalWorkingDays = 0;
let empDailyWage = new Map();

function getWorkingHours(empCheck) {
	switch(empCheck) {
                case IS_PART_TIME:
                        empHrs = 4;
                        break;
                case IS_FULL_TIME:
                        empHrs = 8;
                        break;
                default:
                        empHrs = 0;
        }
	return empHrs;
}

function calcDailyWage(empHrs) {
	return empHrs*EMP_RATE_PER_HOUR;
}
while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
	totalWorkingDays <= NUM_OF_WORKING_DAYS) {
	let empCheck = Math.floor(Math.random()*3);
	totalWorkingDays++;
	empHrs = getWorkingHours(empCheck);
	totalEmpHrs += empHrs;
	empDailyWage.set(totalWorkingDays,calcDailyWage(empHrs));
}
totalWage = calcDailyWage(totalEmpHrs);
console.log(empDailyWage);
console.log(totalWage);
