'use strict';
const express = require('express'); // express서버

const session = require('./src/auth/session.js');
const passport = require('./src/auth/passport/local.js');

const typeRouter = require('./src/routes/admin/typePage.js');
const quesRouter = require('./src/routes/admin/quesRouter.js');
const indexRouter = require('./src/routes/indexRouter.js');
const authRouter = require('./src/routes/authRouter.js');
const testRouter = require('./src/routes/test.js');
const db = require('./src/db.js');

const app = express(); // express함수 return값 => application객체! 

app.set('views', './src/views'); //set함수 => name, value => 프로젝트에 자주쓰는 변수를 지정하는 함수.
app.set('view engine', 'ejs');
db(); // call!
// middleware..!
app.use(express.urlencoded({ extended : true })); //post.
app.use(express.json());
app.use(express.static( './src/public' )); //정적 파일 결정!!


session(app); //session함수 호출! 
passport(app);

// routes!! 
app.use('/', indexRouter());
app.use('/ques', quesRouter());
app.use('/api/auth', authRouter(passport(app)));
app.use('/test', testRouter());
app.use('/type', typeRouter());
// app객체 => express의 모든 기능을 모아둔 서버 객체 그 자체!
module.exports = app;