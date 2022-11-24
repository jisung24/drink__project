'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
// const Drink = require('../models/Drink.js');
// /api/auth 

module.exports = (passport) => {

    router.post('/new', async(req,res) => {

        const { email, password, userName, nickName } = req.body; // email password;
        try{
        let newUser = new User(
            {
                email : email,
                password : password,
                userName : userName,
                nickName : nickName,
            }
        )
        let saveUser = await newUser.save();
        console.log(saveUser);
        return res.redirect('/index');
        }catch(err){
            return console.log(err);
        }
    })


    router.post('/local-process',
        passport.authenticate('local', { // 'local'에서 로그인 성패 여부 따지고 따져지면 redirect코드로 온다. 
            successRedirect : '/index',
            failureRedirect : '/local/index',
        })
    )

    return router;
}