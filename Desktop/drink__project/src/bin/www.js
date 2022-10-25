'use strict';
const app = require('../../app.js'); // export default 'react'..
require('dotenv').config({ path : './src/env/variables.env' });
const { PORT } = process.env;

/**
 * => server connect function
 * @param {*} portNumber : port number
 * @returns server connected phrase!
 */
async function start(portNumber){
    // 무조건 promise를 return할 수 있게끔..!
    try{ // promise fulfilled!
        const server = await app.listen(portNumber);
        return console.log(`${portNumber}port start!`);
        // server는 promise then안에 있는 파라미터 변수! 
    }catch(err){ // promise rejected..!
        return console.log(err);
    }
}

start(PORT);