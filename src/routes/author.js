const express = require('express');
const authorController = require('../controller/authorController');
const authorRouter = express.Router();

authorRouter 
    .post('/api/author', authorController.create)

module.exports = authorRouter;