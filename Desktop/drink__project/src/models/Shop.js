'use strict';
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            unique : true,
            required : true,
        },
        address : {
            type : String,
           
        },
        phone : {
            type : String,
        },
        menu : {
            type : String,
        },
        
        
    }, 
    {
        timestamps : true,
    },
)


module.exports = mongoose.model('Shop', UserSchema)