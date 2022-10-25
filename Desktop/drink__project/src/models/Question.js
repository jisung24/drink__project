'use strict';

// 유져 => 질문지를 풀어 => 술취향..! 
// 유져 db에 술취향을 넣는데...!! => 그 값이.. 질문 결과를 통해 나온다...!! 

// 질문 db를 만들고.
// 유져필드에 질문을 해서 유져가 답한 값을 배열로... 
// 그리고 그 배열로 배열함수를 써서 유져의 술 취향을 result로 나오게...!

// 질문db => type이 나오는 당신은 ~~이거 결과db
const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema(
    // 유져와 연결까지 시켜줘야돼...!! 관계도 맺어야돼..!! 
    // 회원가입 할 때..! userName
    // 김동선한테 질문, 김지성한테 
    {
        number : {
            type : Number, 
            unique : true,
            required : true,
            // 몇 번 질문인지?
        },
        content : { // 어떤 질문인지? 
            type : String,
            required : true,
        },
        response : [String],
        value : [String],
        // 여기에다가 값을 입력을 여러개 해줘야돼..
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Question', questionSchema);
// 질문에 넣어야돼..!

// 이 질문이 등록이 돼!!!!!!