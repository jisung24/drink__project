'use strict';
// admin router
const express = require('express');
const router = express.Router();
const User = require('../../models/User.js');
const Question = require('../../models/Question.js');
module.exports = () => {
    // 질문 get post put delete
    // 각 질문 id가 있어...!!
    // 질문 페이지 => get /ques
    // 질문 생성 => post /ques
    // 질문 수정 => put /ques/:id
    // 질문 삭제 => delete /ques/:id

    // 질문 페이지 생성..! 

    // 1. 질문 페이지 띄우기!
    router.get('/index', async(req,res) => {
        try{
            let quesPage = await res.render('./admin/questionRegister.ejs');
        }catch(err){
            return console.log(err);
        }
    })

    // 2. 질문 database등록!
    router.post('/', async(req,res) => {
        // 한 개 한 개를 전부 document로 줘야돼...!
        const { number, content, response, value } = req.body;    
        let question = new Question(
            {
                number : number,
                content : content,
                response : response,
                value : value,
            }
        )
        let questionSave = await question.save();
        console.log(questionSave);

        return res.redirect('/ques/index');
    })    


    // 3. 질문 수정 put : /ques
    router.put('/:id', (req,res) => {
        console.log(req.params);
        console.log(`질문 수정!`)
    })
    // 4. 질문 삭제 delete : /ques

    // 5. test결과 return
    router.get('/result', async(req,res) => {
        
    })
    return router;
}

