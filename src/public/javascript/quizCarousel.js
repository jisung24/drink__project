'use strict';
const form = document.querySelector('.test__start > .form');
const next = document.querySelectorAll('.next');
// const submit = document.querySelector('.submit');

next.forEach((value, index) => {
    value.addEventListener('click', () => {
        form.style.transform = `translateX(${(index + 1) * -25}%)`
        form.style.transition = `all 0.5s`;
    })
})


// click을 한 값을 배열에 넣어둔다!
const button = document.querySelectorAll('.form input[type="button"]');
const select_value = document.querySelectorAll('select');

const valueArr = []; // 버튼 클릭하면 select값을 배열에 넣어준다!! 

button.forEach((value, index) => {
    value.addEventListener("click", () => {
        valueArr.push(select_value[index].options[select_value[index].selectedIndex].text);

        if(valueArr.length === 4){
            goFetch(...valueArr);
        }
    })
})

async function goFetch(...arr){
    let num = arr.map((value) => +value);
    let go = await fetch(`/test/result?question=${num[0]}&question=${num[1]}&question=${num[2]}&question=${num[3]}`)
    .then((res) => res.json());
    

}

// 버튼을 click했을 때!! => select[index]가 선택된 값을 담아오기..!