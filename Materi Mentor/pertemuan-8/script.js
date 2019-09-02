// let & const

// es5
// var name5 = 'John'
// var age5 = 23
// name5 = 'John Due'
// console.log(name5)

// // es6
// let name6 = 'John'
// const age6 = 23
// name6 = 'John Due'
// console.log(name6)

// es5
// function test5(passedTest) {
//   if (passedTest) {
//     var firstName = 'john'
//     var year = 1995
//   }
//   console.log(firstName)

//   console.log(firstName + ' born in ' + year)
// }
// test5(true)

// // es6
// function test6(passedTest) {
//   let firstName = 'due'
//   let year = 23
//   if (passedTest) {
//     firstName = 'john'
//     year = 1995
//   }
//   console.log(firstName)

//   console.log(firstName + ' born in ' + year)
// }
// test6(true)

// es5
// for (var i = 0; i < 5; i++) {
//   console.log(i)
// }
// console.log(i)
// es6
// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }
// console.log(i)

// strings

// let firstName = 'Randy'
// let lastName = 'Vianda'
// console.log(`${firstName} ${lastName}`)

// const n = `${firstName} ${lastName}`
// console.log(n.startsWith('Randy'))
// console.log(n.endsWith('Vianda'))
// console.log(n.includes('an'))
// console.log(`${firstName} `.repeat(10))

// arrow function

// es5
// function test5() {
//   console.log('hallo es5')
// }
// test5()

// // es6
// let test6 = () => {
//   console.log('hallo es6')
// }
// test6()

// es5
// function Person(name) {
//   this.name = name
// }

// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(
//     function(el) {
//       return this.name + ' adalah teman ' + el
//     }.bind(this),
//   )

//   console.log(arr)
// }
// var friends = ['bobi', 'john', 'vianda']
// new Person('Randy').myFriends5(friends)

// // es6
// Person.prototype.myFriends6 = function(friends) {
//   const arr = friends.map(el => `${this.name} adalah teman ${el}`)

//   console.log(arr)
// }
// new Person('Putra').myFriends6(friends)

// Destructuring
// es5
// var john = ['John', 22]
// var name = john[0]
// var age = john[1]

// es6
// const [name, age] = ['john', 22]

// console.log(name)
// console.log(age)

// const obj = {
//   firstName: 'Randy',
//   lastName: 'vianda',
// }

// const {firstName, lastName} = obj
// console.log(firstName)
// console.log(lastName)

// const {firstName: a, lastName: b} = obj
// console.log(a)
// console.log(b)

// array

// const boxes = document.querySelectorAll('.box')
// console.log(boxes)
// es5
// var boxesArr5 = Array.prototype.slice.call(boxes)
// console.log(boxesArr5)
// boxes.forEach(function(cur) {
//   cur.style.backgroundColor = 'orange'
// })

// es6
// const boxArr6 = Array.from(boxes)
// boxArr6.forEach(cur => (cur.style.backgroundColor = 'cyan'))
// console.log(boxArr6)

// const boxes = document.querySelectorAll('.box')
// es5
// for (var i = 0; i < boxes.length; i++) {
//   if (boxes[i].className === 'box blue') {
//     continue
//   }
//   boxes[i].textContent = 'saya bukan blue'
// }
// console.log(boxes)
// es6
// for (const cur of boxes) {
//   if (cur.className.includes('blue')) {
//     continue
//   }
//   cur.textContent = 'saya bukan blue'
// }

// es5
// var ages = [12, 17, 18, 22, 10]
// var full = ages.map(function(cur) {
//   return cur >= 18
// })
// console.log(full)
// console.log(full.indexOf(true))
// console.log(ages[full.indexOf(true)])

// es6
// console.log(ages.findIndex(cur => cur >= 18))
// console.log(ages.find(cur => cur >= 18))
// const diatas18 = ages.filter(cur => cur >= 18)
// console.log(diatas18)

// spread operator
// const arr1 = [11, 12, 13]
// const arr2 = [16, 17, 18]
// const allArray = [...arr1, 4, 5, ...arr2]
// // console.log(allArray)

// function getNumber(number) {
//   // const concat = [...number, ...arr1, ...arr2]
//   console.log(number)
// }

// getNumber(allArray)

// Maps
// const question = new Map()
// question.set('question', 'sebutkan macam2 standar javascript ?')
// question.set(1, 'es5')
// question.set(2, 'es6')
// question.set(3, 'es7')
// question.set('correct', 2)
// question.set(true, 'jawaban benar')
// question.set(false, 'jawaban anda salah')
// const listAge = [17, 20, 22, 26]
// question.set('data_umur', listAge)

// console.log(question.get('question'))
// console.log(question.get(1))
// console.log(question.get(2))
// console.log(question.get(3))
// console.log(question.get('correct'))
// console.log(question.get(true))
// console.log(question.get('data_umur'))

// console.log(question)
// question.delete(1)
// question.clear()
// console.log(question)

// es5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name
//   this.yearOfBirth = yearOfBirth
//   this.job = job
// }

// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth
//   console.log(age)
// }

// var john5 = new Person5('John', 1990, 'programmer')
// john5.calculateAge()

// // es6
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
//   }

//   calculateAge() {
//     const age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age)
//   }

//   greeting() {
//     console.log('hallo es6')
//   }
// }

// const john6 = new Person6('John', 1990, 'teacher')
// john6.calculateAge()
// john6.greeting()

// subclass

// es5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth
  console.log(age)
}

var Athelete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job)
  this.olympicGames = olympicGames
  this.medals = medals
}

Athelete5.prototype = Object.create(Person5.prototype)

Athelete5.prototype.wonMedal = function() {
  this.medals++
  console.log(this.medals)
}

var johnAthlete5 = new Athelete5('John', 1990, 'swimmer', 3, 10)
johnAthlete5.calculateAge()
johnAthlete5.wonMedal()

// es6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calculateAge() {
    const age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
  }

  greeting() {
    console.log('hallo es6')
  }
}

class Athelete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job)
    this.olympicGames = olympicGames
    this.medals = medals
  }

  wonMedal() {
    this.medals++
    console.log(this.medals)
  }
}

const johnAthlete6 = new Athelete6('John', 1990, 'swimmer', 3, 10)

johnAthlete6.wonMedal()
johnAthlete6.calculateAge()
