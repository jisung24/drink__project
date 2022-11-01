'use strict';
const express = require('express');
const router = express.Router();

module.exports = () => {
    // 1. /test/result
    router.get('/result', async(req,res) => {
        try{
            console.log(req.query);
        }catch(err){
            return console.log(err);
        }
    })

    return router;
}