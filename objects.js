//ex: object oriented programming (OOP)
//Objects are dynamic: you can always be adding/deleting properties and functions

//if function is part of an object, it's called a METHOD

/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

circle.draw(); //draw method
*/


/**
 * ************************************************
*/

//Factory Functions
//camel notation

//instead of creating 'circle' object above, we create a
//factory function to create multiple obj with same code

function createCircle(radius) {
    return {
        radius, //when key & parameter (same), just write the key
        draw() { //function inside doesn't need 'function'
            console.log('draw');
        }
    };
}

const circleOne = createCircle(1);
console.log(circleOne);

const circleTwo = createCircle(2);
console.log(circleTwo);


/**
 *******************************************************
*/

//Constructor Functions
//used for creating objects
//Pascal notation

function Circle(radius) {
    this.radius = radius; //'this' keyword reference obj using function
    this.draw = function (){
        console.log('draw');
    }
}

const circle = new Circle(1); //'new' keyword reference new instance of obj


/**
 *******************************************************
*/

//Constructor Property
//every obj has a constructor property references function used to create it

console.log(circle.constructor); //shows Circle function that created
// they show differently, 
console.log(circleOne.constructor); //shows built in object literal function that created it


/**
 ********************************************************
*/

//Primitives are copied by their value
//ie:
x = 10;
y = x;

x = 20;

// console x = 20, console y = 10...they are independent

//objects are copied by their reference location in memory
//ie:
x = { value: 10};
y = x;

x.value = 20;

//console x = {value : 20}, console y = {value : 20}


/**
 ********************************************************** 
*/

//Cloning an object (combining)

const another = Object.assign({}, circle);
const another = { ...circle };
//same thing

const anther = Object.assign({color: 'red'}, circle);


/**
 ********************************************************** 
*/


//Garbage collection
//don't have to deallocate memory


/**
 ************************************************************** 
*/

//Math built-in object examples

Math.random() //random number between 0-1
Math.round() //rounds number
Math.max() //returns max number of arguments


/**
 ******************************************************
*/


//Template literals
const name = 'Randy'
const writing = `
Hi ${name},
This is template literals...
Using dollar siqn and expressions
`


/**
 ******************************************************
*/



