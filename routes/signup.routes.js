const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const bcrypt = require('bcryptjs');

router.get('/signup', (req, res)=> {
res.render('signup')
});

router.post('/signup', (req, res)=> {

const salt = bcrypt.genSaltSync(10);
const pwHash = bcrypt.hashSync(req.body.password, salt);
// const hash2 = bcrypt.hashSync(plainPassword2, salt);

User.create({ username: req.body.username, passwordHash: pwHash}).then(()=>{
res.redirect('/')
});

});

module.exports = router;