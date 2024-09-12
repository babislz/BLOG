const express = require('express');
const authorRouter = require('../src/routes/author');
const articleRouter = require('../src/routes/article');

module.exports = function(app) {
    app 
        .use(express.json())
        .use(articleRouter)
        .use(authorRouter)
}