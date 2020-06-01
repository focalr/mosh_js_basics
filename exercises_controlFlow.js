//Exercise #1
//Max of two numbers
//find larger of two numbers

function maxTwoNumbers (numOne, numTwo){
    return (numOne > numTwo) ? numOne : numTwo;
}

console.log(maxTwoNumbers(5, 25));


//Exercise 2
//Landscape or Portrait
//true if landscape, false if portrait
//amateur vs pro level example

function isLandscape (width, height){
    // return (width > height) ? true : false; (Amateur)
    return (width > height); //(pro level)
    // because the condition will return true, false anyway, no need for expression ? ...
}

console.log(isLandscape(100, 500));


//Exercise 3
//FizzBuzz
//if number divisible by 3 => 'Fizz'
//if number divisible by 5 => 'Buzz'
//if number divisible by 3 & 5 => 'FizzBuzz'
//if number not divisible by 3 or 5 => use actual number
//if not a number => 'Not a number'

const output = fizzBuzz(9);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number') return 'Not a number';
    else if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
    else if (input % 3 !== 0 && input % 5 !== 0) return input;
    else if (input % 3 === 0) return 'Fizz';
    else return 'Buzz';
}


//Exercise 4
//Demerit points
//speed limit = 70
//driving speed limit or below => 'OK'
//for every 5 over 70, you get 1 point (points:1)
//use built in function, Math.floor()
//12 pts => 'license suspended'

checkSpeed(81);

function checkSpeed(speed){
   const speedLimit = 70;
   const mphPerPoint = 5; 
   if (speed < speedLimit + mphPerPoint) {
    console.log('OK');
    return;
   }
    const pt = Math.floor((speed - speedLimit) / mphPerPoint);
    if (pt >= 12) console.log('License Suspended');
    else console.log('points; ' , pt); 
}


//Exercise 5
//Even and Odd numbers
//use function with 'limit' parameter
//display number and 'even' or 'odd' until 'limit' number reached

showNumbers(19);

function showNumbers(limit) {
    for(let i = 0; i <= limit; i++){
        if (i % 2 === 0) console.log(i , 'EVEN');
        else console.log(i , 'ODD');

        //alternative way
        //const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        //console.log(i , message);
    }
}


//Exercise 6
//Count truthy
//takes an array, returns the number of truthy elements

const arr = [1, 2, "Randy", undefined];

countTruthy(arr);

function countTruthy (array) {
    let count = 0;
    for (let index of array)
        if (index) count++;
    return console.log(count);
}


//Exercise 7
//String Properties
//pass object to function
//function should show all properties of obj of type string

const person = {
    name: 'Randy',
    age: 38,
    address: '1046 Regents Center Circle',
    weight: 221
};

showProperties(person);

function showProperties (obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}


//Exercise 8
//Sum of multiples of 3 and 5
//return the sum of all multiples of 3 & 5 from 0 to limit

console.log(sum(25));

function sum(limit){
    let total = 0;
    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 && i % 5 === 0)
            total += i;

    return total;
}


//Exercise 9
//Grade
//calculate grade of a student
/* grades:
0-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/


const marks = [40, 90, 80];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    const avg = calculateAverage(marks);
    if (avg < 60) return 'F';
    if (avg < 70) return 'D';
    if (avg < 80) return 'C';
    if (avg < 90) return 'B';
    return 'A';
}

function calculateAverage(array){
    let sum = 0;
    for (let value of array)
        sum += value;

    return sum / array.length;
}


//Exercise 10
//Stars
//list rows with * matching row #
/* ex:
*
**
***
*/

showStars(5);

function showStars(rows){
    let stars = "*"
    for (let i = 1; i <= rows; i++)
        console.log(stars.repeat(i));
}


//Exercise 11
//Prime numbers
//takes a limit, shows all prime nums to that limit

showPrimes(20);

function showPrimes(limit){
    for (let index = 2; index <= limit; index++)
        if (isPrime(index)) console.log(index);
}

function isPrime(index){
    for (let factor = 2; factor < index; factor++)
        if (index % factor === 0)
            return false;
            
    return true;
}

