// function expression atau anonymous function
// let run = function(){
//     console.log('run')
// }

// function declaration
// function walk(){
//     console.log('walk')
// }

// let move = run;
// run();
// move();

// argument pd function
// console.log(sum(1,2));
// console.log(sum(1,2,3,4,5));
// function sum(a, b){
//     let total = 0;
//     console.log(arguments);
//     for(let value of arguments){
//         total += value;
//     }
//     return total;
// }

// rest operator
// function sum(...args){
//     console.log(args)
//     return args.reduce((a,b) => a+b);
// }
// console.log(sum(1,2,3,4,5));

// function sum(discount, ...prices){
//     const total = prices.reduce((a,b) => a+b)
//     return total * (1 - discount)
// }

// console.log(sum(0.1, 50, 50))

// setter & getter
// const person = {
//     n1: 'Dadi',
//     n2: 'Ilham',
//     get fulln(){
//         // return person.n1 + ' ' + person.n2;
//         // template literals
//         return `${person.n1} ${person.n2}`
//     },
//     set fulln(value){
//         const split = value.split(' ');
//         this.n1 = split[0];
//         this.n2 = split[1];
//     }
// }
// console.log('nama saya adalah : ' + person.fulln())
// console.log(`nama saya adalah : ${person.fulln()}`)

// person.fulln = 'John ilham';
// console.log(person)

// try & catch
// const person = {
//     1: 'Dadi',
//     n2: 'Ilham',
//     get fulln(){
//         return `${person.n1} ${person.n2}`
//     },
//     set fulln(value){

//         // error handling
//         if(typeof value !== 'string'){
//             throw new Error('Value is not string');
//         }

//         // error return
//         // if(typeof value !== 'string') return

//         const split = value.split(' ');
//         if(split.length !== 2){
//             throw new Error('Masukan nama awal dan akhir');
//         }

//         this.n1 = split[0];
//         this.n2 = split[1];
//     }
// }
// try {
//     person.fulln = 'Dadi Lennon';
// }catch(e){
//     console.log(e)
//     // alert(e)
// }

// console.log(person)

// local & global scope

// function start(){
    
// }

// let vs var
// function test(){
//     for(var i = 0; i < 5; i++){
//         console.log(i)
//         if(true){
//             var color = 'red'
//         }
//     }
//     console.log(color)
//     console.log(i)
// }
// test()

// var dianggap global tapi masih didalam scope
// kalo let terbatas di local scope

// var color = 'red' //functional scope
// let age = 21 // blocked scope