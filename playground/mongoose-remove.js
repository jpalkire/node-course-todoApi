const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove();
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b53f67c6ffae72d201023e6').then((todo) => {
    console.log(todo);
});

// Todo.findOneAndRemove()