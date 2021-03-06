const express = require('express');
const Usercontrollers = require('../controllers/Usercontroller');
const userrouter = express.Router();
const { reqAuth } = require('../Middleware/AuthMiddleware');


userrouter.get('/signup', Usercontrollers.get_signup);

userrouter.get('/login', Usercontrollers.get_login);

userrouter.post('/signup', Usercontrollers.post_signup);

userrouter.post('/login', Usercontrollers.post_login);

userrouter.get('/logout', reqAuth, Usercontrollers.get_logout);

module.exports = userrouter;