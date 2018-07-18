// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to connect to database');
   } 
   console.log('Connected to MongoDB server');

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5b4ec3211df64145d8e5f5bb')
//    }, {
//        $set: {
//            completed: true
//        }
//     }, {
//         returnOriginal: false
//     }).then((result) => {
//         console.log(result);
//     })

   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5b4eb9c76b5317255c2128e6')
   }, {
       $set: {
           name: 'Josh'
       },
       $inc: {
           age: -3
       }
   }, {
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   })
     //db.close();
});