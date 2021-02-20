

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


// objects
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// ========= factory function
// definition the method in one place
// camel notation
// refactor code. delete location and isVisible for now

// function createCircle(radius){
//     return {
//         radius,

//         draw(){  // you can drop the function key word in an object
//             console.log('draw')
//         }
//     };
// }
// // const circle1 = createCircle(1);
// console.log(circle1); // displays the object
// // factory function you call a function and in the function you return a new object


// ======== Constructor Function
// create a function to construct or create an object
// Pascal Notation- when the first letter of the word is capitalized like below
// intialize the object with the 'this' keyword

// function Circle(radius){
//     this.radius = radius; // adding the radius property and setting it to the parameter
//     this. draw = function(){
//         console.log('draw')
//     }   // adding a function method
//     // return this;  is what the new keyword is doing. using new you don't ave to do that
// }

//const circle = new Circle(1);
// new creates an empty js object ---> const x = {}
// next it will point what the this keyword is refering to the new object
// finally it will return this new object from the function

// in constructor function you use the new operator and instead of returning
// an object we use the this keyword.
// this is used in java and C sharp

//======= Dyanmic Naturee of objects
// adding properties to an object

// const circle = { // the const is the circle variable that can't be changed, but the contents can
//     radius: 1
// };

// circle.color = 'yellow'; // object.property = 'value'
// circle.draw = function(){} // adding a function method

// // deleting propeties
// delete circle.color;
// delete circle.draw;

//======== Enumerating Properties of an object

// const circle = {
//     radius: 1,
//     draw(){
//         console.log('draw');
//     }
// };

// // use for seeing properties in an object
// for (let key in circle)
//     console.log(key) // you get radius and draw
//     console.log(key, circle[key]) // get the property and value
// // error
// for (let key of circle)
//     console.log(key); // error because for of can only be used on arrays and maps
//     // things that are iterable

// // how to fix the error
// // you can use a for of loop if you create an array within it
// for(let key of Object.keys[circle])
//     console.log(key);
//     // Object.keys[circle] --> object is a constructor function
//     // keys return  string array that contains the properties and methods
//     // itreturns the names of the enumerable propertiesand methods of an object
//     // [circle] is refering to the oject
// for(let entries of Object.entries[circle])
//     console.log(entries);
//     // returns each key value pair as an array


// // to see if a given property or method exists
// if ('property' in object) console.log('yes');

// //========= Cloning an object
// // get the properties in an oject and copy them
// // copying th above object into the const another
// const another = {}; // first set it to an empty object
// for(let key in circle) // iterate through the circle object
// another[key] = circle[key]
// // another[key] ---> is the 'radius'
// console.log(another);

// // instead of using the code above use the object.assign method
// const another = object.assign({}, circle);
// takes all the properties in the circle and assigns them to an empty object
// same as above, but cleaner
// in the {} you can add another property

// another way to clone an object
//const other = { ...circle }; // ... takes all the properties and method in an object and puts it into a new object

// ========= Garage Collection
// find variable and const that aren't used an throws it away


// ========= String object
// string primitive
const message = 'hi';
// message.property or message.method // wraps it in a string object

// string object
//const another = new String('hi');

// ========= Template Literals
// recap
//      object literals: {}
//      boolean literal: true, false
//      string: '', ""
//      template literall ``

// you can write it in back ticks the way you want to see the output
const another = `This is my
first message`;

// you can add any variables or expresssions dynamically by placing them in the placeholder ${}
const name1 = 'John';
const message1 = `hi, ${name1},`

// ========= Date object
const now = new Date();
const date1 = new Date('may 11 2018 09:00') // js Date to search for formats provided under MDN dateString
const date2 = new Date(2018, 4, 11, 9);
// they have get and set methods
now.get // getting the information
now.set // setting the date


// Create an address object with 3 properties
//     street
//     city
//     zipcode
// then create a function called showAddress that takes an address object
// and displays all the properties along with the value

const address = {
	street: '123 Javascript ln',
	city: 'San Antonio',
	zipCode: 78257
}
function showAddress(address){
	for(let key in address)
		console.log(key, address[key]);
}
showAddress(address);


// write address object in a factory function and constructor function

// factory function

function factoryAddress(street, city, zipcode){
	return {
		street,
		city,
		zipcode,
	};
}
const address1 = factoryAddress('a', 'bb', 'ccc');
console.log(address1);
// constructor function

// function ConstructorAddress(street, city, zipcode){
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipcode;
// }
// const address2 = new ConstructorAdress('aa', 'b', 'cc');
// console.log(address2);


// Object equaity
// create two function
// function 1 is called areEqual that passes the two addresses as arguments
// check if object is equal
// function 2 areSame with the two addresses as argument
// to see if they are referncing the same object
const address2 = new ConstructorAdress('aa', 'b', 'cc');
const address3 = new ConstructorAdress('aa', 'b', 'cc');
const address4 = address2;
console.log(areEqual(address2, address3));
console.log(areSame(address2, address3));
console.log(areSame(address2, address4));

function ConstructorAdress(street, city, zipcode){
	this.street = street;
	this.city = city;
	this.zipCode = zipcode;
}
function areEqual(address2, address3){
	return address2.street === address3.street &&
		address2.city === address3.city &&
		address2.zipCode === address3.zipCode;
}


function areSame(address2, address3){
	return address2 === address3;
}

//========= Blog post object
// build an object with the following properties
//          title
//          body
//          author
//          views
//          comments (author, body) comments has two properties
//          isLive

// const blogPost = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         { author: 'aa', body: 'bb' },
//         { author: 'aa', body: 'bb' }
//     ],
//     isLive: true
// };

// console.log(blogPost);

// building the object aove into a constructor function
function Blog(title, body, author){
	this.title = title;
	this.body = body;
	this.author = author;
	this.views = 0;
	this.comments = [],
		this.isLive = true
}

const blog = new Blog('a', 'b', 'c');
console.log(blog);

const priceRange = [
	{ label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
	{ label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
	{ label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

console.log(priceRange);

// array lesson

// adding elements

//  const numbers = [3,4];
//  numbers.push(5,6); // add to the end

//  numbers.unshift(4,5); // add to the beginning

//  numbers.splice(2, 0, 'a', 'b'); //go to a position and add new elements or remove elements
//  // the first parameter is the starting index, second is how many to delete,
//  // the 3rd is what you want to add
//   console.log(numbers);

// ========== finding elements (primitives)

//   const numbers = [1,2,3,4];

//   numbers.indexOf(1)// return the index of the given element.
//   numbers.lastIndexOf(1) // gives you the last index of the given number if there were two of the same number
//   // will return -1 is the given number doesn't exist

//   numbers.includes(1) // returns true if the number is in the array
// all 3 have the ability to have two parameters (start index, from index)

//========= finding elements (reference types)

const courses = [
	{ id:1, name: 'a'},
	{ id:2, name: 'b'},
];

// when you have an array with reference types. you will use the find method
const course = courses.find(function(course){
	return course.name === 'a';
});
console.log(course); // returns the first element that matches if
// element doesnt exist it will return undefined
// to find the index of the element that matches use findIndex instead

// ========= arrow functions
// refactor the above code
// const course = courses.find(course =>  course.name === 'a');
// finding a course with the name equal to 'a'

// ========= removing Elements
// const numbers = [1,2,3,4];

//numbers.pop(); // removing last element from the end
//numbers.shift(); // removing the element from the beginning

// numbers.splice(2,1); // (deleting 3) removing from the middle. pass the index
// of the element then the number of elements we want to delete

// ========== Emptying an array
// reassign to new array
// let numbers = [1,2,3,4];

// === solution 1
// this works if nothing is pointing to the numbers array
// if theres no refernces to the original array

// numbers = [];

// console.log(numbers);

// === solution 2
// removes all elements. preferred solution

// numbers.length = 0;

// === solution 3
// go to a given position and remove one or more elements
// numbers.splice(0, numbers.length);

// === solution 4
// put it in a loop. not recommended pretty noisy
//while (numbers.length > 0)
//  numbers.pop();

// ========= Combining and Slicing Arrays
const first = [1,2,3];
const second = [4,5,6];

// const combined = first.concat(second); // returns the first followed by the second storing it in a new variable


//const slice = combined.slice();

// first way is to set the start index and the end index so it will copy the middle
// set the start and it will copy what is behind it
// dont set anything and it will copy the whole thing

// ========= The Spread Operator
// instead of using the concat method we use the bottom to refactor the const combined above
// const combined = [...first, ...second];

// the above method you are declaring an array then adding individual elements
// of the first and second array
// gives you more flexibility to add an element like below
const combined = [...first, 'a', ...second, 'b'];

console.log(combined);

// refactoring the slice method into ES6
const copy = [...combined];
console.log(copy);

// ========= iterating an array
const numbers2 = [1,2,3];

// === for of loop
for(let number of numbers2)
	console.log(number); // displays the elements of the array

// === forEach ES6 if you need an index
numbers2.forEach((number, index) => console.log(index, number));

// ========= Joining Arrays
const numbers3 = [1,2,3];
const joined = numbers3.join(','); // wanting to joing them with a ,

// split is used when you want to take a string and make it an array
const message2 = 'this is my firt message';
const parts = message2.split(' ');
console.log(parts);
const combinedString = parts.join('-'); //method is used when building url slot
console.log(combinedString);

// ========= Sorting Arrays
const numbers = [2,3,1];
numbers.sort(); // converts each elements to string then sorts elements to an array

numbers.reverse(); // reverses the array
console.log(numbers);

const courses2 = [
	{id:1, name: 'node.js'},
	{id:2, name: 'javascript'},
];
// want to sort array by name of courses so javascript is first

courses2.sort(function(a,b){
	// a <b => -1
	// a > b => 1
	// a === b => 0
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();
	if(nameA < nameB) return -1;
	if(nameA > nameB) return 1;
	return 0;
});
console.log(courses2);
// ascii(american standard code informtion interchang) table
// each character has a numeric representation so capitalization matters
// in order to keep away from case sensitivity you can do toUppercase or toLowerCase

// ========= Testing the elements of an array
const numbertests = [1,2,3];

// check and see if all numbers are positive
// every() checks if every element matches the criteria

// const allPositive = numbers.every(function(value){
//     return value >= 0;
// }); // .every has 3 parameters (value, index, array)
// when calling methid as soon as it finds an element that
// doesnt match the search will terminate

// you can also use .some to check if there is at least one element
const atLeastOnePositive = numbers.every(function(value){
	return value >= 0;
});

// ========= Filtering an Array
// how to filter an array based on a search criteria

//const filterNumbers = [1, -1, 2, 3];

//want to return only positive numbers

//const filtered = filterNumbers.filter(n => n >= 0); // loop through and execute callback function to display the correct value
// number where number is greater than or equal to 0 [1,2,3]
//console.log(filtered);
// in real world application you use an array of objects

// ========= Mapping an Array
// you can map each item to something else

const mapNumbers = [1,-1,2,3];

const filtered = mapNumbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>'; // makes it into a string

console.log(html);

// mapping number to object property
// const mapNumbers = [1,-1,2,3];

// const filtered = mapNumbers.filter(n => n >= 0);

// const items = filtered.map(n => ({ value: n }) );

//  when you put the object inside parathesis the arrow function
//  doesnt read it as a call back function
// console.log(items);

// refactoring and chaining with map and filter
// take away the const declaration of filtered because it is only used once
// calling the map method on the result of the filter method
// putting the methods on separte lines and declaring the results in a const
// const items = mapNumbers
//    .filter(n => n >= 0)
//    .map(n => ({ value: n }));
//
// console.log(items);

// ========= Reducing an Array
const reduceNumbers = [1, -1, 2, 3];
// calculating the sum of number in the array
// reduce method is like calculating the total cost in a shopping cart

// doing it the long way
// step 1: declare variable and intialize it to 0
// step 2: loop over the array get each element or number and add it to sum
// step 3: display sum on the console


let sumReduce = 0; // step1
for(let number of reduceNumbers) // step2
	sumReduce += number; //adding the numbers to the sum

console.log(sumReduce);

// refactoring it to the reduce method
// reduce all the elements in the array to a single value
// method take a call back function with two parameters
// accumulator and currentValue
// accumulator is like a sum: step1
// currentValue will be set to one element in the array: step2
// in each call you want to get the current value and add it to the
// accumalator

// const sumRefactored = reduceNumbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0); // 0 to intialize the accumalator step1
// console.log(sumRefactored);

// refactored again
// take away the zero and the accumalator will start with the 1st number
// in the array. taking away one step for the computer to analyze
// take away the return and {} since it's just doing one calculation

const sumRefactored = reduceNumbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);
console.log(sumRefactored);

// ========= Array exercises

// === Array From Range
const rangeNumbers = arrayFromRange(-10, -4);

console.log(rangeNumbers);
function arrayFromRange(min, max){
	const output = []; //set to an empty array so the output is an array
	for(let i = min; i <= max; i++ )   // need a for loop to generate numbers from min and max
		output.push(i); // taking the output and adding it to the end of the array
	return output;
};

// === Includes
// create a function called includes that takes in an array and a search element
// if you have the search element it shold return true if not it should return false
const includeNumbers = [1,2,3,4];

console.log(includes(includeNumbers, 1));

function includes(array, searchElement){
	for (let element of array)
		if(element === searchElement)
			return true;
	return false;
};

// === except
// create a function called except that takes in an array
// excludes a value from the the array
const eNumbers = [1,2,3,4];

const outputExclude = except(eNumbers, [1]);
console.log(outputExclude);

function except(array, excluded){
	const outputExclude = [];
	for (let element of array)
		if(!excluded.includes(element))
			outputExclude.push(element);
	return outputExclude;
}

// === Moving an element
// using the function move to move a element in a array
// using 3 parameters array, index, offset.

const moveNumbers = [1,2,3,4];

const moveOuput = move(moveNumbers, 0, 1);
console.log(moveOuput);

function move(array, index, offset){
	const position = index + offset;
	if(position >= array.length || position < 0){
		console.error('invalid offset');
		return;
	}

	const moveOuput = [...array]; // declare a moveOuput set it to a new array and pass the original array by spreader
	const element = moveOuput.splice(index, 1)[0];// remove an element from an array
	// splicing the moveOutput and passing in an index and removing one element
	// next need to add it back to the array
	moveOuput.splice(position, 0, element); // index plus the offset, deleting nothing from the element
	return moveOuput;
}
