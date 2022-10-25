'use strict';
const express = require('express');
const router = express.Router(); // app.get vs router.get 
// router 모듈화가 가능하게 해줌.. app.method => 모듈화가 불가능...!!
const Question = require('../models/Question.js');
const User = require('../models/User.js');
const Drink = require('../models/Drink.js');

module.exports = () => {
    //1. index GET : /index
    router.get('/index', async(req,res) => {
        try{
            let key = await Drink.findOne().select('-_id -id -sweet -sour -body -cool');
            let drink = await Drink.find().limit(12);
            let keyArr = Object.keys(key.toJSON());
            
            let mainPage = await res.status(200)
            .render('index.ejs', {
                drink : drink,
                keyArr : keyArr,
            });
        }catch(err){
            return console.log(err);
        }
    })

    // 2. 전통주 취향 test GET /drink-test/index
    router.get('/drink-test/index',login, async(req,res) => {
        // db안에 있는 질문들을 전부 불러와서 여기다가 띄울거야!! 

        try{
            let questions = await Question.find();
            // [ {}, {}, {}, ... ]
            console.log(questions);
            let drinkTestPage = await res.status(202)
            .render('drinkTest.ejs', {
                questions : questions,
            });
        }catch(err){
            return console.log(err);
        }
    })

    // 3. 전통주 주점 GET /drink-shop/index
    router.get('/drink-shop/index', async(req,res) => {
        try{
            let drinkShopPage = await res.status(202).render('drinkShop.ejs');
        }catch(err){
            return console.log(err);
        }
    })
    
    // 4. 회원가입 페이지 GET /register/index
    router.get('/new/index', async(req,res)=> {
        res.render('register.ejs');
    })

    // 5. 로그인 페이지 GET /login/index
    router.get('/local/index', async(req,res) => {
        res.render('login.ejs');
    })
     // 6. 로그아웃 GET /logout
     router.get('/logout', async(req,res) => {
        req.session.destroy(() => {
            return res.redirect('/index');
        })
    })

    // 7. 마이 페이지 GET /my-page/:_id
    router.get('/my-page/:_id', login, async(req,res) => {
        try{
                   
            User.findOne( async(에러, 결과)=>{  //post 문서의 모든 데이터를 출력
                console.log(결과);
            res.render('mypage.ejs', {사용자: req.user, posts : 결과});    
            });

        }catch(err){
            return console.log(err);
        }
    })

    // 8. 전통주 주점 GET /drink-shop/index
    router.get('/drink-info/index', async(req,res) => {
        try{
            let drinkShopPage = await res.status(202).render('drinkInfo.ejs');
        }catch(err){
            return console.log(err);
        }
    })

    return router;
}

//로그인 했는지 여부 함수
function login(req, res, next) {  //로그인 했는여지 여부를 판단
    if (req.user) { //요청한 유저가 있으면 통과시킴
      next() 
    } 
    else { 
      res.render('login.ejs') 
    } 
  } 