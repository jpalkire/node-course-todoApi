const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = 'grace555!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPass = '$2a$10$zUEv5DWOJCdYQkMR629Vdu5XQI2GxqnicASdyOlBJJ1ffw9dY/qwm';

bcrypt.compare(password, hashedPass, (err, res) => {
    console.log(res);
})

// var data = {
//     id: 7
// }

// var token = jwt.sign(data, 'mysecret');
// console.log(token);

// var decoded = jwt.verify(token, 'mysecret');
// console.log('---Decoded---');
// console.log(decoded);

// var message = 'This is the bomb';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'mysecret').toString()
// };

// token.data.id = 7;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'mysecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else { 
//     console.log('Not truthy');
// }

// var fudgedHash = SHA256(JSON.stringify(data)).toString();
// console.log(`Bad data: ${fudgedHash}`);