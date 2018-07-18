// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to connect to database');
   } 
   console.log('Connected to MongoDB server');

//    db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//    }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert Todo', err);
//         }

//         console.log(JSON.stringify(result.ops, undefined, 2));
//    });

    // db.collection('Users').insertOne({
    //     name: 'Josh Alkire',
    //     age: 33,
    //     location: 'Las Cruces, NM'
    // }, (err, result) => {
    //     if (err) {
    //      return console.log('Unable to create User', err);
    //  }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

   db.close();
});