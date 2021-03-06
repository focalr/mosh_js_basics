//function declaration
function walk(){
    console.log('walk');
}

//anonymous function expression
let run = function (){
    console.log('run');
};

//named function express
let jog = function jog(){
    console.log('jog');
};   

walk();
run();
jog();


/**
******************************************************** 
*/

//Hoisting (function declarations are moved to the top of the file)

//Declared functions can be called before they are defined
//expressed functions can not be called before they are defined


/**
**************************************************************** 
*/

//Arguments (for unknown number of parameters)
function sum(){
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1,2,3,4,5,6));


/*
**************************************************************
*/

//Rest operator ('...')when used with parameter of a function
//will take varying number of parameters and place in an array

function sumRest(...args){
    console.log(args);
}

console.log(sumRest(1,2,3,4,5,6));

//so to find sum of array, use .reduce()
function sumRestArray(...args){
    return args.reduce((a,b) => a + b);
}

console.log(sumRestArray(1,2,3,4,5,6));


//shopping cart example with discount
function pricing(discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(pricing(0.1, 20, 30));


/**
************************************************************ 
*/


//Default parameters
function interest(principal, rate = 3.5, years = 5){
    //rate = rate || 3.5;
    //years = years || 5;
    //ES6 allows modern, in parameters
    return principal * rate / 100 * years;
}

console.log(interest(10000, 5, 10));


/**
************************************************************ 
*/

//Getters and Setters

//getters => access properties
//setters => change (mutate) them

//create person object
const person = {
    firstName: 'Randy',
    lastName: 'Jarrett',
    //function that returns full name
    //get keyword allows us to call without ()
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    //assuming value argument is a valid string
    //.split method to turn string into an array with ' ' seperator
    //assigning values using array indexes
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

//setter because it is assigning new values
person.fullName = 'Randall Jarrett'

//'GET' keyword in object allows to call without method ()
console.log(person.fullName);


/**
************************************************************ 
*/

//Error handling
//Try and Catch
//THROW an exception ('throw new Error('message'))

const personOne = {
    firstName: 'Randy',
    lastName: 'Jarrett',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        //checking to make sure argument sent is a string
        if (typeof value !== 'string')
            throw new Error('Value is not a string');
        
        const parts = value.split(' ');
        
        //checking to make sure array is 2 elements long
        if (parts.length !== 2)
            throw new Error('Must enter first and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    personOne.fullName = 'Randall';
}
catch (e){
    console.log(e.message);
}

console.log(personOne);


/**
*************************************************************** 
*/

//Local vs Global Scope

//variables are only accessible within the blocks they are defined (LOCAL)

//variables outside of code blocks have GLOBAL scope
//LOCAL variables take precedence over GLOBAL variables within a function
//try to avoid declaring GLOBAL variables


/**
*************************************************************** 
*/


//'THIS' keyword
//'this' represents the object that is executing the current function

//if reference is inside method of function => represents the obj
//if reference is inside function => represents the global object (window in browsers, global in NODE)

//EX: because 'play' is a method within 'video' obj, 'THIS' references the 'video' object
const video = {
    title : 'a',
    play(){
        console.log(this);
    }
};

//because playVideo is global function, 'this' references the window obj so....
function playVideo(){
    console.log(this);
}

//instead, create a "NEW" object with constructor function
function Video(title){
    this.title = title;
    console.log(this);
}

video.play();

//NEW operator references new empty object
const v = new Video('b'); //new object


/**
************************************************************ 
*/

//.CALL() method
//changes the value of 'THIS'
//.APPLY() method
//changes the value of 'THIS'
//only difference is how you pass arguments with them, apply uses an array

//.BIND() binds that value to every call of the function


//starting ES6, arrow functions inherit 'THIS'
playVideo.call( {name: 'Randall'} );
playVideo.apply( {name: 'Randy'} );
playVideo.bind( {name : 'Rand'} );



