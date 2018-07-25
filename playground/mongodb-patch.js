const _ = require('lodash');
const {MongoClient, ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to connect to database');
   } 
   console.log('Connected to MongoDB server');


var id = '5b5403e45ba0013e08a277ae';
var orgBody = { 
    text: 'One more time....',
    completed: false,
    completedAt: new Date().getTime()
    };

var body = _.pick(orgBody, ['text', 'completed']);


if (!ObjectID.isValid(id)) {
        // return res.status(404).send();
        return console.log('Unable to find todo');
    }

if(_.isBoolean(body.completed) && body.completed) {
    newBody.completedAt = new Date().getTime();
} else {
    body.completed = false;
    body.completedAt = null;
    }
console.log(orgBody);
console.log(body);


    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
          // return res.status(404).send();
          return console.log('Unable to find todo');
        }

        console.log({todo});

        // res.send({todo});
    }).catch((e) => {
        console.log(e);
    // res.status(400).send();
    });
});