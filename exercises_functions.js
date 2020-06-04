//exercise 1
//sum of arguments

//function with varying # of args, returns their sum
//second, modify function to allow array as argument

console.log(sum([1,2,3,4,5]));

function sum(...args){
    if (Array.isArray(args)){
        let sum = 0
        for (let each of args[0])
            sum += each;
        return sum;

    //another way of doing
    //checks to see if first item is an array
    //makes item an array of numbers, not an array of an array    
    /*
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    */
    };
    return args.reduce((a,b) => a + b);
}


//exercise 2
//area of circle
//create circle object using obj literal syntax
//should have radius property
//area property that is 'read only'

const circle = {
    radius: 2,
    get area (){
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle);
console.log(circle.radius);
console.log(circle.area);

circle.radius = 4;
console.log(circle.radius);

circle.area = 20; //wont change area value
console.log(circle.area);


//exercise 3 
//error handling

const numeros = [1,2,3,4,1];

try{
const count = countOccurrences(null, 1);
console.log(count);
}
catch (e){
    console.log(e.message);
}

function countOccurrences(array, searchElement){
    if (!Array.isArray(array)) //validate if array is an array
        throw new Error('Must be an array');
    return array.reduce((accum, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accum + occurence;
    }, 0);
}

