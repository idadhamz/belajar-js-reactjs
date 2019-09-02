
// init mongodb dari node_modules
// init mongo client
// ObjectID
const { MongoClient, ObjectID } = require('mongodb')

// url default local mongodb
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// create connection
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect')
  }

  // connect client ke database
  const db = client.db(databaseName)
  
  // main perintah mongodb

  // insert data
  // db.collection('users').insertOne({
  //   name: 'Putra',
  //   age: 24
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('gagal insert')
  //   }

  //   console.log(result.ops)
  //   console.log(result.insertedCount)
  //   console.log(result.insertedId)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'John',
  //     age: 27
  //   },
  //   {
  //     name: 'Due',
  //     age: 28
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('gagal insert')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Makan',
  //     compeleted: true,
  //   }, {
  //     description: 'Mandi',
  //     compeleted: false,
  //   }, {
  //     description: 'Jalan2',
  //     compeleted: false,
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('gagal insert')
  //   }

  //   console.log(result.ops)
  // })

  // query 
  // db.collection('users').findOne({ _id: new ObjectID('5ca81190738e884eb7970ead') }, (error, task) => {
  //   console.log(task)
  // })

  // db.collection('tasks').find({ compeleted: false}).toArray((error, tasks) => {
  //   console.log(tasks)
  // })

  // update data
  db.collection('users').updateOne({
    _id: new ObjectID('5ca81190738e884eb7970ead')
  }, {
    $set: {
      age: 17
    }
  }, (error, result) => {
    console.log(result)
  })

  // db.collection('tasks').updateMany({
  //   compeleted: false
  // }, {
  //   $set: {
  //     compeleted: true
  //   }
  // }).then((result) => {
  //   console.log(result.modifiedCount)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // delete 
  // db.collection('users').deleteMany({
  //   age: 23
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('tasks').deleteOne({
  //   description: 'Makan'
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
})