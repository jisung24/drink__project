'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
// const Drink = require('../models/Drink.js');
// /api/auth 

module.exports = (passport) => {

    router.post('/register-process', async(req,res) => {
        const { email, password, userName } = req.body; // email password;
        
        let newUser = new User(
            {
                email : email,
                password : password,
                userName : userName,
            }
        )
        let saveUser = await newUser.save();
        console.log(saveUser);
        return res.redirect('/index');
    })


    router.post('/login-process',
        passport.authenticate('local', { // 'local'에서 로그인 성패 여부 따지고 따져지면 redirect코드로 온다. 
            successRedirect : '/index',
            failureRedirect : '/login/index',
        })
    )

    return router;
}