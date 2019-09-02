
// init mongodb dari node_modules
// const mongodb = require('mongodb');
// init mongo client
// const mongoClient = require('mongodb').MongoClient
// const ObjectID = require('mongodb').ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// connection
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('unable to connect');
    }

    // connect antara client ke db
    const db = client.db(databaseName);

    // main perintah mongodb
    // db.collection('users').insertOne({
    //     name: 'Dadi',
    //     age: 19
    // })

    // insert data
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Makan',
    //         completed: true
    //     },
    //     {
    //         description: 'Minum',
    //         completed: true
    //     },
    //     {
    //         description: 'Mandi',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('gagal insert')
    //     }
        
    //     console.log(result.ops)
    // })

    // cari data
    // db.collection('tasks').findOne({_id: new ObjectID('5ca8181edc1ab7134055e2d4')}, (error, task) => {
    //     console.log(task)
    // })
    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    //     console.log(tasks);
    // })

    // update data
    db.collection('users').updateOne({
        _id: new ObjectID('5ca812ec42748c08f40e2085')
    }, {
        $set: {
            age: 20
        },
    }, (error, result) => {
        console.log(result)
    })

})