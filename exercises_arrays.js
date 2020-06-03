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
//Except

//using numeros from exercise 2 [1, 2, 3, 4]

const output = except(numeros, [1,3]);

console.log(output);

function except(array, excluded){
    const output = [];
    for (let i of array)
        if (!excluded.includes(i))
            output.push(i);
    return output;    
}


//exercise 4
//moving an element

//using numeros from exercise 2 [1,2,3,4]

const nums = [1,2,3,4];
const outputs = move(nums, 0, -2)

console.log(outputs);

function move(array, index, offset){
    const position = index + offset; //validation checks
    if (position >= array.length || position < 0){
        console.error('Invalid offset.');
        return;
    }
    
    const outputClone = [...array]; //clone array so don't disturb original
    const element = outputClone.splice(index, 1)[0]; //splice element at index, return value with '[]'
    outputClone.splice(position, 0, element); //splice the element back in, correct location
    return outputClone;
}


//exercise 5
//count occurences

const numBers = [1,2,3,4,1];

const countEr = countOccurences(numBers, 1);

console.log(countEr);
console.log(numBers);

function countOccurences(array, searchElement){
    const output = array.filter(n => n === searchElement);
    return output.length;
}


//exercise 6
//Get max

const maxNum = getMax(numBers);

console.log(maxNum);

function getMax(array){
    //let initial = array[0];
    //for (let num of array)
        //if (num > initial)
            //initial = num;
    //return initial;

//alternative, .reduce() method
    if (array.length === 0) return undefined;
    return array.reduce((a,b) => (a > b) ? a : b);
}


//Exercise Movies
//all the movies in 2018 with rating > 4
//sort them by their rating
//descending order
//console their title element

//wrote using functions

const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5}
]

const sortedMovies2018 = moviesByYear(movies, 2018);
const sortedMoviesRatingOver4 = ratingMin(sortedMovies2018, 4);
const sortedMoviesByRating = ratingSort(sortedMoviesRatingOver4, 'descending');

console.log(sortedMovies2018);
console.log(sortedMoviesRatingOver4);
console.log(sortedMoviesByRating);

function moviesByYear(array, year){
    const sorted = [...array];
    return sorted.filter(obj => obj.year === year);
}

function ratingMin(array, rating){
    const sorted = [...array];
    return sorted.filter(obj => obj.rating > rating);
}

function ratingSort(array, direction){
    const sorted = [...array];

    sorted.sort((a,b) => {
        let compare = 0
        if (a.rating<b.rating) compare = -1;
        if (a.rating>b.rating) compare = 1;
        return (direction === 'descending') ? (compare * -1) : compare;
    });
    return sorted;
}

//wrote chaining methods

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);    