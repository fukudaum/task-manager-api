//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoCliente = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id)
console.log(id.getTimestamp())


MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 36
    // }).then((result) =>  {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Study'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').updateOne({
    //     _id: new ObjectId("5eb22aea5c66471a2440e782")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
   

    // db.collection('users').findOne({_id: new ObjectId("5eb22aea5c66471a2440e782")}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 1}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 1}).count((error, count) => {
    //     console.log(count)
    // })
    // db.collection('users').insertOne({
    //     name: 'Gilberto',
    //     age: 50
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').findOne({_id: new ObjectId("5eb22cc62dc36d24c488a027")}, (error, task) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Bruna',
    //         age: 23
    //     },
    //     {
    //         name: 'Teo',
    //         age: 1
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Washing Dishes',
    //         completed: true
    //     },
    //     {
    //         description: 'Feed the dog',
    //         completed: false
    //     },

    //     {
    //         description: 'Study',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })
})