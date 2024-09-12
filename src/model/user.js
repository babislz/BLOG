const mongoose = require('mongoose');
const { authorSchema } = require('./author');

const User = new mongoose.Schema({
    author: {
        type: authorSchema,
        required: true,
    },
    login: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        minLength: 6
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: false
    },
    removedAt: {
        type: Date,
        required: false
    }
});

module.exports = User;
