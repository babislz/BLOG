const User = require('../model/user');
const jwt = require('jsonwebtoken');
const { Author } = require('../model/author');
require('dotenv').config();
const CryptoJS = require('crypto-js');

class authorController