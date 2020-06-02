const numbers = [3, 4];

//add to end
numbers.push(5, 6);

//add to beginning
numbers.unshift(1,2);

//add to middle
//splice(start index, delete items?, items...)
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

/**
 ********************************************************* 
*/

//Finding elements (primitives)

//find index of element, (-1) if not found
console.log(numbers.indexOf(3));
console.log(numbers.indexOf('T'));

//find last index of element
numbers.push(1);
console.log(numbers);

console.log(numbers.lastIndexOf(1));

//find it element exists
console.log(numbers.includes(1));

/**
 ***************************************************** 
*/

//finding elements (references)

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

//find first references, 'UNDEFINED' if not present
const course = courses.find(function (course) {
    return course.name === 'a';
});

console.log(course);

//find index of reference

const courseOne = courses.findIndex(function (course) {
    return course.name === 'a';
});

console.log(courseOne);

/**
*********************************************************** 
*/

//Arrow function syntax

//removes 'function' keyword
//single parameter can remove '()'
//no parameters you have to pass empty '()'
//if only one statement, can remove '{}', and remove 'RETURN' keyword

//ie:

const courseTwo = courses.find(function (course) {
    return course.name === 'a';
});

//becomes
const courseThree = courses.find(course => course.name === 'a');

console.log(courseThree);

/**
********************************************************** 
*/

//Removing elements

const ele = [1, 2, 3, 4];

//remove from the end
const last = ele.pop();
console.log(ele);
console.log(last);


//remove from the beginning
const first = ele.shift();
console.log(ele);
console.log(first);

//remove from the middle
ele.push(4, 5); //add back to 4 elements
console.log(ele);
ele.splice(2, 2); //delete two elements, starts at index: 2
console.log(ele);


/**
********************************************************* 
*/

//Emptying an array

//solution 1:
//numbers = [];  reinitize to empty array (not a good one if multiple references to array)

//solution 2:
//numbers.length = 0;   truncates the length of array back to zero

//solution 3:
//numbers.splice(0, numbers.length);

//solution 4:
//while (numbers.length > 0)
//  numbers.pop();


/**
***************************************************************** 
*/

//Combining and slicing arrays

const firstArr = [1,2,3];
const secondArr = [4,5,6];

//combine arrays
//both arrays unaffected, returns a new array
const combined = firstArr.concat(secondArr);

console.log(combined);

//slice array
//returns new array of section of another

//.slice(start index, end before index)
//.slice(start index) start index until the end
//.slice() copy of the original array
const sliced = combined.slice(2, 4);

console.log(sliced);

//when combining or slice array REFERENCES
//they copy the REFERENCE location, not the elements


/**
************************************************************ 
*/

//Spread operator '...'
//ie:

//const combinedSpread = firstArr.concat(secondArr);
//becomes:
const combinedSpread = [...firstArr, ...secondArr];

console.log(combinedSpread);


/*
************************************************************
*/

//Iterating an array

const constants = [1,2,3,4];

//normal for each loop to iterate an array
for (let number of constants)
    console.log(number);

//another is the forEach method
constants.forEach(function (number) {
    console.log(number);
});

//or in arrow format
constants.forEach(number => console.log(number));

//logging the index of element
constants.forEach((number, index) => console.log(index, number));

/**
**************************************************************** 
*/

//Joining arrays

//.join(seperator?) results in a string

const lotto = [25, 50, 75, 100];

const winningNum = lotto.join(',');
console.log(winningNum);


//.split is used for strings, returns an array
//then can use .join

const message = 'This is a message for you';
const parts = message.split(' '); //splits string into array elements at 'SPACE'
console.log(parts);

const joinedMessage = parts.join('-'); //joins array elements with '-' into string
console.log(joinedMessage); 


/**
********************************************************** 
*/

//Sorting arrays

//.sort() method 
//.reverse() method

//.sort() method for references behaves differently
//have to add callback function

const collegeCourses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'Javascript'}
];

//if you want to sort by 'NAME'

collegeCourses.sort(function (a,b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(collegeCourses);

/**
******************************************************** 
*/

//Filtering an array

//.filter() method to filter elements with callback function

/**
******************************************************** 
*/

//Mapping an array
//.map() map each element of an array into something else

//.filter() and .map() are chainable

const numero = [1, -1, 2, 3];

const itemsNum = numero
    .filter(n => n >= 0)
    .map(n => ({ value: n}));

console.log(itemsNum);


//.reduce() reduces an array to a single value

const sum = numero.reduce((accumulator, currentValue) => accumulator + currentValue); 

console.log(sum);

