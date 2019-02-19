const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true,
    user: 'admin',
    pass: 'admin'
});

module.exports = {
    mongoose
};