'use strict';
function inputValueChange(){
    var inputValue = document.getElementById('inputValue').value;
    return inputValue;
}

const button = document.querySelector('.fetchButton');
button.addEventListener('click', () => {
    goFetch(inputValueChange)
})

async function goFetch(func){
    let value = func();
    try{
        let go = await fetch(`/result?${hello} = ${value}`)
    }catch(err){
        return console.log(err);
    }
}