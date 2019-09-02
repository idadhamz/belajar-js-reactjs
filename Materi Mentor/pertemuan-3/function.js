
// function expression / anonymous function
// let run = function() {
//     console.log('run')
// }

// // function decalaration
// function walk() {
//     console.log('walk')
// }
// let move = run;
// run();
// move();

// argument pada function 
// function sum(a, b) {
//     return a + b
// }
// console.log(sum(1, 2))
sum = () => {
    let total = 0;
    console.log(arguments)
    for (let value of arguments) {
        total += value;
    }
    return total
}
console.log(sum(1, 2, 3, 4, 5))

// rest operator
// function sum(...args) {
//     console.log(args)
//     return args.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3, 4, 5, 10))

// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b)
//     return total * (1 - discount)
// }

// console.log(sum(0.1, 50, 50))

// setter & getter
// const person = {
//     firstName: 'Randy',
//     lastName: 'Vianda',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         const split = value.split(' ')
//         // console.log()
//         this.firstName = split[0];
//         this.lastName = split[1];
//     }
// }
// person.fullName = 'John Putra'
// console.log(person)
// getter = access properti
// setter = change data

// try & catch

// const person = {
//     firstName: 'Randy',
//     lastName: 'Vianda',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         // if (typeof value !== 'string') return
//         if (typeof value !== 'string') {
//             throw new Error('Value is not string')
//         }
//         const split = value.split(' ')
//         if (split.length !== 2) {
//             throw new Error('masukan nama awal dan akhir')
//         }
//         this.firstName = split[0];
//         this.lastName = split[1];
//     }
// }
try {
    person.fullName = 'John Lenon';
} catch (e) {
    console.log(e)
    // alert(e)
}
// console.log(person)

// local & global

// const color = 'red';
// function start() {
//     // const color = 'blue'
//     // console.log(color)
//     // const message = 'hi'
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//     }
//     console.log(i)
// }
// start()
// // console.log(color)

// let vs var
// function start() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//         if (true) {
//             var color = 'red'
//         }
//     }
//     console.log(color)
// }
// start()
var color = 'red' // function scoped
let age = 21 // block scoped