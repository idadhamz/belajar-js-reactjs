const express = require('express')
const bodyParser = require('body-parser')

// db
const db = require('./db/db')

// set up express
const app = express();

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

// get all data
app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'todos berhasil diambil',
        todos: db
    })
})

// post data
app.post('/api/v1/todos', (req, res) => {
    
    if(!req.body.title){
        return res.status(400).send({
            success: false,
            message: 'title is required'
        })
    } else if(!req.body.description){
        return res.status(400).send({
            success: false,
            message: 'description is required'
        })
    }

    const todo = {
        id: db.length + 1,
        title: req.body.title,
        description: req.body.description
    }
    db.push(todo)
    return res.status(201).send({
        success: true,
        message: 'berhasil ditambah',
        todo
    })
})

app.listen(3000, () => {
    console.log('server is running')
})