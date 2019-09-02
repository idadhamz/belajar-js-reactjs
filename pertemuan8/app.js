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