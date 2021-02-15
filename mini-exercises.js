

// hour
// if hour is between 6am and 12pm: good morning
// if it is between 12pm and 6pm; goodafternon
// otherwise; goof evening
let hour = 14;

if(hour >= 6 && hour < 12)
	console.log("goodmorning");
else if (hour >= 12 && hour < 18)
	console.log("good afternoon");
else
	console.log("good evening ")
// write a function that takes two numbers and returns the maximum of
//the two numbers

function highestNumber(num1, num2){
	if (num1 > num2) return num1;
	return num2;
}
console.log(highestNumber(2,5));
console.log(highestNumber(10, 9));
console.log(highestNumber(200, 100));

function isLandscape(width, height){
	return (width > height);
}

console.log(isLandscape(800, 600));

// divisibe by 3 => Fizz
// divisible by 5 => Buzz
// divisible by both 3 and 5 => FizzBuzz
// not divisible by 3 or 5 => input
// not a number => 'not a number'
const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input){
	if(typeof input !== "number")
		return NaN;
	if((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
	if(input % 3 === 0) return 'Fizz';
	if(input % 5 === 0) return 'Buzz';
	return input;
}

// write a function called check speed that takes in the speed of the car as the parameter.
// speed limit = 70
// 5 above speed limit = 1 point
// Math.floor
// more than 12 points license if suspended
checkspeed(50);
checkspeed(75);
checkspeed(180);
checkspeed(90);


function checkspeed(speed){
	let speedLimit = 70;
	let kmPerPoint = 5;
	if(speed < speedLimit + kmPerPoint) {
		console.log('ok');
		return;
	}
	const points = Math.floor((speed - speedLimit) / kmPerPoint);
	if(points >= 12)
		console.log('license suspended');
	else
		console.log('points: ', points);

}

// write a function called showNumber that takes in a parameter called limit
// display whether the index is even or odd
function showNumbers(limit){
	for(let i = 0; i <= limit; i++){
		const message = (i % 2 === 0) ? 'even' : 'odd';
		console.log(i, message);
	}
}
showNumbers(10);

// create a function named countTruthy that take in an array
// and returns the number of truthy elements in the array
const array = [0, null, undefined, '', 2, 3];

function countTruthy(array){
	let count = 0;
	for(let value of array)
		if(value)
			count++
	return count;
}
console.log(countTruthy(array));

// create a function called show properties that passes an object.
// should display all the properties of the object that are of type string
const movie = {
	title: 'a',
	releaseYear: 2018,
	rating: 4.5,
	director: 'b'
};
showProperties(movie);

function showProperties(obj){
	for(let key in obj)
		if(typeof obj[key] ==='string')// get property of the value
			console.log(key, obj[key])
}

// create a function called sum give it a limit return the sum of all the
// multiples of 3 and 5 from 0 up to the limit
function sum(limit){
	let sum = 0;

	for(let i = 0; i <= limit; i++)
		if (i % 3 === 0 || i % 5 === 0)
			sum += i;
	return sum;
}
console.log(sum(10));

// create a function calculateGrade to calculate the grades of a student
// pass an array
const marks = [80, 80, 50];
// average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calculateGrade(marks){
	const average = calculateAverage(marks);
	if(average < 60) return 'F';
	if(average < 70) return 'D';
	if(average < 80) return 'C';
	if(average < 90) return 'B';
	return 'A'
}

function calculateAverage(array){
	let sum = 0;
	for(let mark of array)
		sum += mark;
	return sum / array.length;
}
console.log(calculateGrade(marks));


// create function called showStars with a parameter of rows.
// will add another star depending on how many rows are called.
function showStars(rows){

	for(let row = 1; row <= rows; row++){
		let pattern = '';
		for(let i = 0; i < row; i++)
			pattern += '*';
		console.log(pattern);
	}
}
showStars(10);

// create a function called showPrimes that takes in a limit and shows the
// primes numbers until the limit

function showPrimes(limit){
	for(let num = 2; num <= limit; num++)
		if(isPrime(num)) console.log(num);
}



function isPrime(num){
	for(let factor = 2; factor < num; factor++)
		if(num % factor === 0)
			return false;

	return true;
}

showPrimes(10);