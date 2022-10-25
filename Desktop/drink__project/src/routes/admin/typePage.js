'use strict';
const express = require('express');
const router = express.Router();
const Type = require('../../models/DrinkType.js');
//  /type/new
module.exports = () => {

    // type생성!
    router.get('/index', (req,res) => {
        res.render('./admin/userType.ejs');
    })
    router.post('/new', async(req,res) => {
        const { userType, userRecommand } = req.body;
        
        let type = new Type(
            {
                userType : userType,
                userRecommand : userRecommand,
            }
        )
        let saveType = await type.save();
        console.log(saveType);

        return res.redirect('/type/index')
    })

    return router;
}