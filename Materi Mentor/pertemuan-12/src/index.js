// init express
const express = require('express')
// port
const port = 3000
// call mongoose
require('./db/mongoose');
// call model user & task
const Task = require('./model/task')
// use express
const app = express()
// use json
app.use(express.json())

// minimalist function.
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

// create task
app.post('/task', (req, res) => {
  const task = new Task(req.body)
  task.save(err => {
    if(err) return res.status(500).send(err)
    return res.status(200).send(task);
  })
})

// Read task
app.get('/task', async (req, res) => {
  const task = Task.find((err, task) => {
    if(err) return res.status(500).send(err)
            return res.status(200).send(task)
  })
});

// update data with selected ID
app.put('/task/:id', async (req, res) => {
  const _id = req.params.id
    const task = await Task.findByIdAndUpdate(_id,{
      $set:req.body
    },(err, succ) => {
    if (err) return res.status(500).send(err)
      const response = {
        message: "Task successfully updated",
        description: req.body.description
      };
    return res.status(500).send(response)
    })
});

// delete data with selected Id
app.delete('/task/:id', async (req, res) => {
  const _id = req.params.id;
  const task = await Task.findByIdAndRemove(_id, (err, succ) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Task successfully remove",
      id: req.params.id
   };
    return res.status(200).send(response);
  })
});

// Read & Selected by ID
app.get('/task/:id', async (req, res) => {
  const _id = req.params.id
  const task = await Task.findById(_id) 
  if(task) {
    sendJsonResponse(res, 200, task) 
  }else{
    sendJsonResponse(res, 500, err)
  }
});

app.listen(port, () => {
  console.log('server is running in port ' + port)
})