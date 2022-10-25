'use strict';
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            unique : true,
            required : true,
        },
        password : {
            type : String,
            required : true,
        },
        userName : {
            type : String,
            required : true,
        },
        response : { // 설문조사 8개 응답한 값이 배열로 담김..
            type : [String], // 배열로...!! 
        },
        userDrink : {
            // 어울리는 술..! => response arr의 값에 따라 달라짐.
            type : String,
        },
        drinkType : {
            // 당신은 홍당무 타입..
            type : String,
        }
    },
    {
        timestamps : true,
    }
)
userSchema.methods.comparePassword = function(inputPassword, cb) {
    if (inputPassword === this.password) {
      cb(null, true);
    } else {
      cb('error');
    }
  };

module.exports = mongoose.model('User', userSchema);