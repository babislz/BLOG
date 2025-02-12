const mongoose = require('mongoose');
const { authorSchema } = require('./author');

const Article = mongoose.model('Article', 
    new mongoose.Schema({
        title: {
            type: String,
            required: true,
            minLength: 3
        },
        text: {
            type: String,
            required: true,
            minLength: 15
        },
        author: {
            type: authorSchema,
            required: true
        },
        likes: {
            type: Number,
            required: true
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
    })
)

module.exports = Article;