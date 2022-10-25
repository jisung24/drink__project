'use strict';
// db를 연결해주는 함수를 app에 exports해주기..! 
const mongoose = require('mongoose');
require('dotenv').config({ path : './src/env/variables.env' });
const { DB_URL } = process.env;
// console.log(DB_URL);

/**
 * 
 * @returns db connect phrase!
 */
async function dbConnect(){
    try{// fulfilled!
        let db = await mongoose.connect(DB_URL, {
            useNewUrlParser : true, 
        })
        return console.log('mongodb connected successfully!');
    }catch(err){ //rejected
        return console.log(err);
    }
}

module.exports = dbConnect; //선언문으로 내보내준다..!! => app.js에서 호출을 하는거야!