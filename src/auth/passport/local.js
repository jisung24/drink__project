'use strict';
const User = require('../../models/User.js');
const bcrypt = require('bcrypt');

// passport local방식으로 로그인
// passport는 session객체 안에 passport객체를 넣어둠! 
module.exports = (app) => {
    const passport = require("passport");
    const LocalStrategy = require('passport-local').Strategy;
    
    app.use(passport.initialize());
    app.use(passport.session()); 

    //ejs에서 로그인 유무에 따라 로그인버튼 로그아웃 버튼이 보이고 보이지 않는 기능을 위해 추가된 코드
    app.use(function(req,res,next){
    //res.locals.isAuthenticated는 ejs에서 user가 로그인이 되어 있는지 아닌지를 확인하는데 사용
    res.locals.isAuthenticated = req.isAuthenticated(); //현재 로그인이 되어있는지 아닌지를true,false로 return
    //res.locals.currentUser는 로그인된 user의 정보를 불러오는데 사용
    res.locals.currentUser = req.user;//req.user는 passport에서 추가하는 항목으로 로그인이 되면 session으로 부터 user를 deserialize하여 생성됩니다
    next();   //res.locals에 담겨진 변수는 ejs에서 바로 사용가능하기 때문에 사용
  });

    passport.serializeUser((user, done)=> {    
        done(null, user.id);
    });
    passport.deserializeUser((user, done)=> {
        console.log('deserialize >> ',user);   
        done(null, user);
        
    });
    passport.use('local',new LocalStrategy(// local 방식 미들웨어(중간검사)
        {
            usernameField : "email",
            passwordField : "password",
        },
        async(username, password, done) => {
            console.log(`유저가 입력한 id, pw >> ${username}, ${password}`);

            let user = await User.findOne({email : username});
                    console.log(`찾은 user >> ${user}`);

                    let hashedPW = password;
                    let result = await bcrypt.compare(password, hashedPW);
                    console.log(result);

                    if (user){ 
                    
                  
                        if (result) {
                            console.log('로그인 성공!');
                            return done(null, user); // 검증 성공
                        }else{
                            console.log('비밀번호가 틀렸습니다');
                            return done(null, false, { message: '비밀번호가 틀렸습니다' }); // 임의 에러 처리
                        }
                    }else{
                        console.log(`존재하지 않는 회원.`);
                        done(null, false, {message: '가입되지 않은 회원입니다.'});
                    }    
}
    ))


    return passport;
}