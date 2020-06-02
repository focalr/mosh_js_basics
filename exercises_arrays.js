//exercise 1
//array from range

const numbers = arrayFromRange(-11, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    let array = [];
    for (let i = min; i <= max; i++){
        array.push(i);
    }
    return array;
}


//exercise 2
//Includes

//write a function that acts like .includes() method
//use return true if in array, false if not

const numeros = [1, 2, 3, 4];

console.log(includes(numeros, 2));

function includes(array, searchElement) {
    for (let ele of array)
        if (ele === searchElement) return true;
    return false;
}


//exercise 3
