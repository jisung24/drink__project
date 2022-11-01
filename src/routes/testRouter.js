'use strict';
const express = require('express');
const router = express.Router();

module.exports = () => {
    // 1. /test/result

    router.get('/result', async(req,res) => {
        try{
            const { question } = req.query;
            console.log(question);
            // console.log(req.query);
            let values = question.map((value) => +value);
            console.log(values);
            return res.status(200).json(values);
        }catch(err){
            return console.log(err);
        }
    })

    return router;
}