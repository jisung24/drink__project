'use strict';
const express = require('express');
const router = express.Router();

module.exports = () => {
    // 1. 결과
    router.get('/result', async(req,res) => {
        try{
            const {question } = req.query;
            console.log(question);
        }catch(err){
            return console.log(err);
        }
    })

    return router;
}