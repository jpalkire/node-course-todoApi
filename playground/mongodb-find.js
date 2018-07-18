// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to connect to database');
   } 
   console.log('Connected to MongoDB server');

//    db.collection('Todos').find({
//        _id: new ObjectID('5b4e5de654351b2d34aecca8')
//     }).toArray().then((docs) => {
//         console.log('Todos: ');
//         console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch data.', err)
//    })

    db.collection('Users').find({name: 'Josh'}).toArray().then((docs) => {
        console.log(`Users named Josh: `);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data.', err)
    })

   //db.close();
});