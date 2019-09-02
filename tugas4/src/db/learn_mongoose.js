
const mongoose = require('mongoose')

const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Dadi',
//     age: 19
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: 'Learn Mongodb',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email tidak valid');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('umur harus positif number');
            }
        }
    }
})

const me = new User({
    name:'  Dadi Ilham  ',
    email:'    dadiilhamsetiadii@gmail.COM  ',
    age: 19
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error)
})