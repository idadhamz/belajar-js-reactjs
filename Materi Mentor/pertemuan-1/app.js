
// const person = {
//     name: 'Randy',
//     age: 21,
//     hello: function() {
//        return 'Hello'
//     }
// };

// // person.name = 'Vianda';
// person['name'] = 'Putra'

// console.log(person.name)
// console.log(person.age)
// console.log(person.hello())

// array
// let colors = ['red', 'blue', 'green'];
// console.log(colors[2])


// function
// function hello(firstName, lastName) {
//     console.log('Hello Bro ' + firstName + ' ' + lastName)
// }
// hello('Randy', 'Vianda');

// function sum(x = 5, y) {
//     return x + y
// }

// console.log(sum('',4))

// let name = 'randy';
// name = 'vianda';
// const umur = 21;
// umur = 22;
// console.log(umur)

// let hour = 20;
// if (hour >= 6 && hour < 12) {
//     console.log('Good morning')
// } else if (hour >= 12 && hour < 18) {
//     console.log('Good afternoon')
// } else {
//     console.log('good evening')
// }

// let role = 'admagagain';
// switch (role) {
//     case 'guest':
//         console.log('guest user');
//         break;
//     case 'admin':
//         console.log('admin user')
//         break;
//     default:
//         console.log('unknown user')
// }

// operator
// arithmetic
// let x = 10;
// let y = 5;
// console.log(x + y)
// console.log(x - y)
// console.log(x / y)
// console.log(x % y)
// console.log(x ** y)
// increment
// console.log(x++)
// console.log(x)
// decrement
// console.log(--x)

// asignment operator
// let x = 20;
// x *= 5;
// console.log(x)

// comparasion operator
// let x = 1
// console.log(x > 0)
// console.log(x >= 1)
// console.log(x < 1)

// equality operator
// console.log('1' === 1)
// console.log('1' == 1)

// console.log(true === 1)
// console.log(true == 1)

// let point = 120;
// let type = point > 100 ? 'gold' : 'silver';
// console.log(type)

// for
// for (let i = 5; i >= 1; i--) {
//     console.log('Hello world ke-', i);
// }

// while
// let i = 1;
// while (i <= 5) {
//     console.log('Hello world ke-', i);
//     i++;
// }

// do while
// let i = 1;
// do {
//     console.log('Hello ke-'+i);
//     i++
// } while (i <= 5)

// for in

// const person = {
//     name: 'randy',
//     age: 21
// };
// const colors = ['red', 'blue', 'green'];
// // for (let key in person) {
// //     console.log(key, person[key])
// // }
// for (let index in colors) {
//     console.log(index, colors[index])
// }

// for of
const person = {
    name: 'randy',
    age: 21
};
const colors = ['red', 'blue', 'green'];
for (let value of colors) {
    console.log(value)
}