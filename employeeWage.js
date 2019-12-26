let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let EMP_RATE_PER_HOUR = 20;
let NUM_OF_WORKING_DAYS = 2;

let empHrs = 0;
let empWage = 0;
let totalWage = 0;
for(let day=0; day<NUM_OF_WORKING_DAYS; day++) {
	let empCheck = Math.floor(Math.random()*3);
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
empWage = empHrs*EMP_RATE_PER_HOUR;
totalWage += empWage;
}
console.log(totalWage)
