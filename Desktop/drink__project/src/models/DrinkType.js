'use strict';
const mongoose = require('mongoose');
const typeSchema = new mongoose.Schema(
    {
        userName : {
            // required : true,
            type : String,
        },
        userType : {
            required : true,
            type : String,
        },
        userRecommand : {
            type : String,
            required : true,
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Type', typeSchema);