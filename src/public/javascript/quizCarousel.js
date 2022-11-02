'use strict';
// 버튼 누르면 캐러셀 작동하는 코드! 
const next = document.querySelectorAll('.next'); // 다음 문제 이동버튼
const submit = document.querySelector('.submit'); // 최종 제출버튼!
const form = document.querySelector('.test__start > form');
next.forEach((value, index) => {
    value.addEventListener('click', () => {
        form.style.transform = `translateX( ${-25 * (index + 1)}\% )`;
        form.style.transition = `all 0.5s`;
    })
})