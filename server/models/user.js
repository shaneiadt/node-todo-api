const mongoose = require('mongoose');

module.exports.User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        minLength: 1,
        required: true
    }
});