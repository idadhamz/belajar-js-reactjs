
const express = require('express')

const port = 3000

require('./db/mongoose.js')

const User = require('./model/users.js')
const Task = require('./model/task.js')

const app = express()

app.use(express.json())

// END POINT

// USER

app.get('/users', async(req, res) => {
    try {
        const users = await User.find({})
        res.status(201).send(users)
    } catch {   
        res.status(400).send(e)
    }   
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user){
            return res.status(400).send()
        }
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// app.get('/users', (req, res) => {
//     User.find({}).then((users) => {
//         res.status(201).send(users)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.put('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findByIdAndUpdate(_id, {$set: req.body}).then((user) => {
        if(!user){
            return res.status(400).send()
        }
        const response = {
            pesan: 'user berhasil diubah',
            data_yg_diubah: user
        }
        res.status(201).send(response)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.delete('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findByIdAndRemove(_id).then((user) => {
        if(!user){
            return res.status(400).send()
        }
        const response = {
            pesan: 'user berhasil dihapus',
            data_yg_dihapus: user
        }
        res.status(201).send(response)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// TASK

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.status(201).send(tasks)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if(!task){
            return res.status(400).send()
        }
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.put('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findByIdAndUpdate(_id, {$set: req.body}).then((task) => {
        if(!task){
            return res.status(400).send()
        }
        const response = {
            pesan: 'task berhasil diubah',
            data_yg_diubah: task
        }
        res.status(201).send(response)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.delete('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findByIdAndRemove(_id).then((task) => {
        if(!task){
            return res.status(400).send()
        }
        const response = {
            pesan: 'task berhasil dihapus',
            data_yg_dihapus: task
        }
        res.status(201).send(response)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('server is running in port ' + port)
})