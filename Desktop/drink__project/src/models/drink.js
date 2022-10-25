'use strict';
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            unique : true,
            required : true,
        },
        price : {
            type : Number,
           
        },
        img : {
            type : String,
        },
        type : {
            // 이걸로 정렬기능 넣을거니까 중요합니다..!
            type : String,
            required : true,
        },
        alcohol : { // 도수
            type : Number,
            required : true,
        },
        volume : {
            type : String,
        },
        
        sweet : {
            type : Number,
            
        },
        sour : {
            type : Number,
            
        },
        body : {
            type : Number,
            
        },
        cool : {
            type : Number,
            
        },
        food : {
            type : String,
            // required : false로 해줌. => 입력받을 때 받는게 아니라 food에서 가져오는거라서!
            required : false,
        },
        
    }, 
    {
        timestamps : true,
    },
)


module.exports = mongoose.model('Drink', UserSchema)