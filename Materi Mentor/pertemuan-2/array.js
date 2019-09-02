
// const number = [1, 2, 3]
// console.log(number)

// adding array
const numbers = [3, 4];
// 1 akhir
// 2 awal
// 3 tengah2
// end
numbers.push(5, 6);
// console.log(numbers)
// // awal
numbers.unshift(1, 2)
console.log(numbers)
// // tengah
numbers.splice(3, 0, 'a', 'b', 'c')
console.log(numbers)

// find array
// const numbers = [1, 2, 3];
// // const find = numbers.indexOf(3)
// const find = numbers.lastIndexOf(1)
// // const available = numbers.includes(4)
// console.log(find)

// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
//     { id: 3, name: 'c'},
// ];

// const available = courses.find(courses => courses.name == 'c')
// // const available = courses.findIndex(function (courses) {
// //     return courses.name == 'c'
// // })
// console.log(available)

// remove array/ element
// const numbers = [1, 2, 3, 4];
// // akhir, awal, tengah
// // numbers.pop();
// // console.log(numbers)
// // awal
// // numbers.shift();
// // console.log(numbers)
// // tengah
// numbers.splice(2, 2)
// console.log(numbers)

// empty array
// let numbers = [1, 2, 3, 4];
// // solusi 1
// // number = [];
// // console.log(number)
// // solusi 2
// // numbers.length = 0;
// // solusi 3
// // numbers.splice(0, numbers.length)
// // solusi 4
// while (numbers.length > 0) {
//     numbers.pop()
// }
// console.log(numbers)

// combine array
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// // const combined = first.concat(second)
// const combined = [...first, ...second]
// console.log(combined)

// iterate array
// const numbers = [1, 2, 3, 4];
// // numbers.forEach(function(number, index) {
// //     console.log(number, index)
// // })
// numbers.forEach((number, index) => console.log(number, index)) 

// join array
// const numbers = [1, 2, 3];
// const join = numbers.join(', ')
// console.log(join)
// const fullName = 'Randy Vianda Putra';
// const split = fullName.split(' ')
// console.log(split)

// sorting array
// const numbers = [1, 4, 3, 5, 2]
// numbers.sort();
// console.log(numbers)
// numbers.reverse();
// console.log(numbers)

const abj = ['a', 'c', 'b'];
abj.sort()
const a = 2
console.log(a.toString())