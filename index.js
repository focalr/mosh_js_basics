// comment in javascript

// variables, let & const
let name = 'Mosh'; //string literal
let firstName = 'Randall';

const mmConversion = 0.3937; //number literal

let selectedColor = null; 
let isApproved = false; //boolean literal
let lastName = undefined;

typeof lastName; //typeof operator (finds variable type)


    // object
    let person = {

        name: 'Randy',
        age: 38

    }; //object literals

    //dot notation
    person.name = 'Randall';

    console.log(person.name);

    //bracket notation
    person['age'] = 38.5;

    console.log(person['age']);

//arrays
let selectedColors = ['red', 'blue']; //array literal
selectedColors[2] = 1;
console.log(selectedColors.length);

    //functions
    // parameter in (), only meaningful inside function
    //performing a task
    function greet(name, lastName) {
        console.log('Hello ' + name + ' ' + lastName);
    }

    greet('Randall', 'Jarrett'); //passing 'Randall' as argument for functions parameter

    //functions that calculate a value
    //uses 'Return' keyword
    function square(number){
        return number * number;
    }

    console.log(square(2));

/*
operators (arithmetic, assignment, comparison
 logical, bitwise)
*/

//arithmetic
let x = 10;
let y = 3;

console.log(x + y); //addition
console.log(x - y); //subtraction
console.log(x * y); //multiplication
console.log(x / y); //division
console.log(x % y); //remainder of division
console.log(x ** y); //exponitiation (x to the power of y)

//increment (++)
//it matters if the (++) is before or after
console.log(++x) //x will read 11 on console

console.log(x++) //x will read 10 on console, next log x will be 11

//decrement (--)
//matters the same as increment
console.log(--y); //y will read 2 on console

console.log(y--); //y will read 3 on console, will read 2 the next log

    //assigment operator
    // addition
    let x = 10;

    x += 5; //addition assigment
    x *= 3; //multiplication

//comparison operator
let x = 1;

//relational
console.log(x > 0); //greater than
console.log(x < 0); //less than
console.log(x >= 0); //greather than or equal too
console.log(x <= 0); //less than or equal too

//strict equality (same type + value)
console.log(0 === 0); //(TRUE)
console.log(0 !== 0); //(FALSE)

//loose equality ()
console.log("0" == 0); //(TRUE) converts right side to the type of left side, then checks
//where
console.log("0" === 0);//(FALSE)

    //ternary operator (conditional)
    /* ex: if customer has more than 100 pts.
    they are 'gold', otherwise they are 'silver'
    */
    let points = 110;
    let type = points > 100 ? 'gold' : 'silver';
    // notice '?' then the outcomes...if condition = True, then gold, else silver

//logical operator (and, or, not)

//And (&&)
//returns "TRUE" if both operands are true
console.log(true && true); //TRUE
console.log(true && false); //FALSE






