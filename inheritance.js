function Shape(color){
    this.color = color;
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

Shape.prototype.duplicate = () => console.log('duplicate');
Shape.prototype.draw = () => console.log('draw');


function Circle(radius, color){
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = () => console.log('draw circle');

function Square(size, color){
    Shape.call(this, color);

    this.size = size;
}

extend(Square, Shape);

Square.prototype.draw = () => console.log('draw square');

function Triangle(length, color){
    Shape.call(this, color);

    this.length = length;
}

extend(Triangle, Shape);

Triangle.prototype.draw = () => console.log('draw triangle');


let c = new Circle(1, 'blue');
let s = new Shape('red');
let t = new Triangle(10, 'yellow');
let sq = new Square(4, 'green');

const shapes = [
    new Circle(),
    new Triangle(),
    new Square()        
];

for (let shape of shapes)
    shape.draw();












