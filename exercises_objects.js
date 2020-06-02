//Exercise 1
//Address object
//create address obj with three properties
//street, city, zipCode
//create function, showAddress(address) and shows all properties with values

function CreateAddress(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function showAddress(address){
    for (let key in address)
        console.log(key, address[key]);
}

const myHome = new CreateAddress('1046 Regents Center Circle', 'Lexington', 27295);
const momHome = new CreateAddress('1061 Fred Miller Rd', 'Lexington', 27292);

showAddress(myHome);
showAddress(momHome);


//Exercise 4
//Blog post obj
//use obj literal
//properties:
/*
title
body
author
views
comments (author, body)
isLive
*/

const blog = {
    title: 'TRX250R',
    body: "Blog about R's",
    author: 'Randy',
    views: 150,
    comments: [
        {author: 'John', body: 'Awesome work'},
        {author: 'Jacob', body: 'Great job on post'}
    ],
    isLive: true
}

console.log(blog);


//Exercise 5
//Constructor functions
//constructor funcion for blog engine

//views will set initially to zero,
//comments will be an empty array for future comments
//isLive is set to false initially

const post = new Post('250r', "Post about r's", 'Jacob');

console.log(post);

function Post (title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}


//Exercise 6
//Price range object (copy from YELP)
//buttons with tooltips and '&' labels
//create array of objects
//each object is price range of objects

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
];

let restaurants = [
    { averagePerPerson: 5 }
];



