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

// const id = '5c403e1e8c53dc3604a589bf';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// (async () => {
//     const findById = await Todo.findById(id).catch(e => {
//         console.log(e.message);
//     });
//     if (!findById) {
//         console.log('Id not found');
//     } else {
//         console.log('Find by Id (async):', findById);
//     }
// })();

const userId = '5c3ca70d79cacc3df87862a7';

(async () => {
    const user = await User.findById(userId).catch(e => {
        console.log(e.message);
    });
    if (!user) {
        console.log('Unable to find user');
    } else {
        console.log('Find User by Id (async):', user);
    }
})();