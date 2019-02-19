const {
    ObjectID
} = require('mongodb');
const {
    mongoose
} = require('../server/db/mongoose');
const {
    Todo
} = require('../server/models/todo');
const {
    User
} = require('../server/models/user');

// Todo.deleteMany({}).then(result => {
//     console.log(result);
// });

// 5c6c2e96f8eb68305c5ec632

Todo.findOneAndRemove({_id:'5c6c2e96f8eb68305c5ec632'}).then(result => {
    console.log(result);
});

Todo.findByIdAndRemove('5c6c2e96f8eb68305c5ec632').then(result => {
    console.log(result);
});