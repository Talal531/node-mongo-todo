const monngoose = require('mongoose');

var User = monngoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },

});

module.exports = { User };