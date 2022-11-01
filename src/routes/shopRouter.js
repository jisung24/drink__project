'use strict';
const express = require('express');
const router = express.Router();
const Shop = require('../models/Shop.js');
module.exports = () => {

    // 6. 전통주점 GET /drink-shop/index
    router.get('/index', async(req,res) => {
        try{
            console.log('hello');
            let shop = await res.status(200).render('drinkShop.ejs');

        }catch(err){
            return console.log(err);
        }
    })
    // /drink-shop/area/:area
    router.get('/area/:area', async(req,res) => {
        try{
            console.log('api호출!');
            const { area } = req.params;
            console.log(area);
            res.render('drinkArea.ejs', {
                area : area,
            })
            
        }catch(err){
            return console.log(err);
        }
    })
    return router;
}