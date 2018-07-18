// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to connect to database');
   } 
   console.log('Connected to MongoDB server');

   //deleteMany
//    db.collection('Todos').deleteMany({text: 'Buy groceries'}).then((result) => {
//        console.log(result);
//    });
   //deleteOne
//    db.collection('Todos').deleteOne({text: 'Go to sleep'}).then((result) => {
//        console.log(result);
//    });
   //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    })
  

//    db.collection('Users').deleteMany({name: 'Josh'}).then((result) => {
//        console.log(result);
//     })

    db.collection('Users').findOneAndDelete({
        _id: 456
    }).then((result) => {
        console.log(result);
    })

     //db.close();
});