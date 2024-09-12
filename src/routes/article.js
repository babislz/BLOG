const articleController = require('../controller/articleController');
const express = require('express');
const articleRouter = express.Router();

articleRouter 
    .post('/api/article', articleController.create)
    .post('/like/:id', articleController.likeArticle)

module.exports = articleRouter;