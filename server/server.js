var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Started server on port 3000');
});

app.post('/todos', (req, res) => {
   var todo = new Todo({
       text: req.body.text
   });

   todo.save().then((doc) => {
        res.send(doc);
   }, (e) => {
        res.status(400).send(e);
   });
});

// // var newTodo = new Todo({
// //     text: 'Finish this course  '
// // });

// // newTodo.save().then((doc) => {
// //     console.log('Saved todo', doc);
// // }, (e) => {
// //     console.log('Unable to save todo', e);
// // });


// var newUser = new User({
//     email: 'alkirerica@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log('User created', doc);
// }, (e) => {
//     console.log('Unable to create user', e);
// })