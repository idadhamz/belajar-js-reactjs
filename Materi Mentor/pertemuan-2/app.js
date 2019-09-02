
// const circle = {
//     radius: 1,
//     draw: function() {
//         console.log('hello draw')
//     }
// };

// factory object
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('hello draw')
//         }
//     }
// }

// const circle1 = createCircle(1);
// const circle2 = createCircle(2);
// console.log(circle2)
// console.log(circle.draw())

// constructor function
// const circle = {
//     radius: 1,
//     draw: function() {
//         console.log('draw')
//     }
// }
// function Circle(radius) {
//     this.radius = radius
//     color = 'yellow'
//     this.draw = function() { 
//         console.log('hello draw ' + this.radius)
//     }
//     this.description = function () {
//         console.log('warnanya adalah ' + color)
//     }


//     return this;
// }

// const circle1 = new Circle(1)
// console.log(circle1)
// // new = const x = {}

// dynamic object
// const circle = {
//     radius: 1
// }
// circle.color = 'yellow'
// circle.draw = function() {
//     console.log('draw')
// }
// console.log(circle)
// delete circle.draw
// // delete circle.color
// console.log(circle)

// value vs referense type
// let number = 10
// function increase(number) {
//     number++;
// }
// increase(number)
// console.log(number)
// let obj = {
//     value: 10
// };
// function increase(obj) {
//     obj.value++;
// }
// increase(obj)
// console.log(obj)

// properties of object
// const circle = {
//     radius: 1,
//     draw: function() {
//         console.log('draw')
//     }
// };

// for (let key in circle) {
//     console.log(key, circle[key])
// }

// for (let key of Object.keys(circle)) {
//     console.log(key)
// }

// for (let entry of Object.entries(circle)) {
//     console.log(entry)
// }

// if ('color' in circle) {
//     console.log('yes')
// }

// cloning object
const circle = {
    radius: 1,
    draw: function() {
        console.log('draw')
    }
};

// const another = {};
// for (let key in circle) {
//     another[key] = circle[key]
// }
// console.log(another)
// const clone1 = Object.assign({}, circle)
// const clone2 = Object.assign({color: 'blue'}, circle)
// console.log(clone2)
const newObj = {color: 'yellow'};
const another = { ...circle, ...newObj  }
console.log(another)