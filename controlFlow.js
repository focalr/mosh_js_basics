//control flow section on Mosh(JS Basics 1)

//conditional statements
//if...else

/*
if (condition){
    statement
}
else if (anotherCondition){
    statement
}
else
    statement
*/

/*
if hour is between 6am and 12pm: Good morning!
if its between 12pm and 6pm: Good afternoon!
Otherwise: Good evening!
*/

//single statements don't require { }

let hour = 19;

if (hour >= 6 && hour < 12)
    console.log('Good morning!');
else if (hour > 12 && hour <= 18)
    console.log('Good afternoon!');
else
    console.log('Good evening!');

/* shorthand style
if (hour >= 6 && hour < 12) console.log('GM');
else if (hour > 12 && hour <= 18) console.log('GA');
else console.log('GE');
*/

/**
 * **********************************************
 */


//switch...case

/*  
switch (variable){
    case 'checked variable':
        statement (multiple statements with { });
        break;

    default:
        statement;
}

*/

let role;

switch (role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}


/*
**********************************************************
*/

//for loop

/*
for (initialExpression; condition; incrementExpression)
    statement; //multiple statements inside { }
*/

for (let i = 0; i < 5; i++)
    console.log('hello world', i);

//shorthand style
for (let i = 1; i < 6; i*=2) console.log('here again', i);

/*
*****************************************************************
*/

//while loop
//unlike for loop, while loop declare variable externally

/*
let i = 0;
while (condition){
    statement;
    i++;
}
*/

let i = 0;
while (i < 5){
    console.log('gone now', i);
    i++;
}

/*
**********************************************************
*/

//Do..while loop
//DO always runs once, before while loop is read

/*
let j = 0;
do {
    statements;
    increment;    
} while (condition);
*/

let j = 0;
do {
    console.log('but gone now', j);
    j++;
} while (j < 5);

/*
**********************************************************
*/

//For...IN loop
// looping over an object or elements in an Array

/*
for (let 'keyVariable' in object/array)
    statements; (multiple statements in { })
*/

//object example
const person = {
    name: 'Randall',
    age: 38
};

for (let key in person)
    console.log(key, person[key]);

//array example (for in not the best for array)
const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

/*
********************************************************** 
*/

//FOR...OF loop
//new loop since ES6, best for arrays

for (let color of colors)
    console.log(color);

/**
 * *****************************************************
 */

//Break and Continue

//normal while loop
let k = 0;
while (k <= 10){
    console.log(k);
    k++;
}

//while loop, breaks if number equals 5
let l = 0;
while (l <= 10){
    if (l === 5) break;
    console.log(l);
    l++;
}

//while loop, if even number, increments to next number then continues loop
let m = 0;
while (m <= 10){
    if (m % 2 === 0){
        m++;
        continue;
    }
    console.log(m);
    m++;
}


