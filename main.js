'use strict'

                    // メインスライドショー
const slide = document.querySelector('[data-slide]');
const slideItem = document.querySelectorAll('[data-slide-img]');
let current = 0;

const slideImage = function(){
    slideItem[current].style.animation = "opacity-start 2s linear";
    slideItem[current].style.opacity = "0";

    if (current < 3) {
    current += 1;
    } else {
    current = 0;
    }

    slideItem[current].style.animation = "opacity-end 2s linear";
    slideItem[current].style.opacity = "1";
}
setInterval(slideImage, 5000);


                    // 手動スライド
const btn = document.getElementsByClassName("btns");
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        const slide = document.querySelector(".slide ul").children;
        const indicator = document.querySelector(".indicator").children;

        const firstSlideIndex = 0;
        const lastSlideIndex = slide.length - 1;
        const firstIndicatorIndex = 0;
        const lastIndicatorIndex = indicator.length -1;

        const firstItem = slide.item(firstSlideIndex);
        const lastItem = slide.item(lastSlideIndex);
        const firstIndicator = indicator.item(firstIndicatorIndex);
        const lastIndicator = indicator.item(lastIndicatorIndex);

        if (btn[i] === prevBtn) {
            setTimeout(() => {
                firstItem.parentNode.insertBefore(lastItem, firstItem);
                firstIndicator.parentNode.insertBefore(firstIndicator,lastIndicator.nextSibling);
            }, 400)
        } else if (btn[i] === nextBtn) {
            setTimeout(() => {
                lastItem.parentNode.insertBefore(firstItem, lastItem.nextSibling);
                firstIndicator.parentNode.insertBefore(lastIndicator,firstIndicator);
            },200)
        }
    });
}


                    // スクロールアニメーション
let target = document.querySelectorAll('.animation');

window.addEventListener('scroll', () => {
    for (let i = 0; i < target.length; i++) {
        const rect = target[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight;
        if (scroll > offset - windowHeight) {
            target[i].classList.add('show')
        }
    }
})


                    // ハンバーガーメニュー
function nav() {
    document.getElementById('hamberger').classList.toggle('open');
    document.getElementById('all-back').classList.toggle('bg_color');
    document.getElementById("line1").classList.toggle("btn_act1");
    document.getElementById("line2").classList.toggle("btn_opc");
    document.getElementById("line3").classList.toggle("btn_act2");
}
function backTab() {
    document.getElementById('all-back').classList.remove('bg_color');
    document.getElementById('hamberger').classList.toggle('open');
    document.getElementById("line1").classList.toggle("btn_act1");
    document.getElementById("line2").classList.toggle("btn_opc");
    document.getElementById("line3").classList.toggle("btn_act2");
}
document.getElementById('ham-btn').addEventListener('click', () => {
    nav();
});
document.getElementById('all-back').addEventListener('click', () => {
    backTab();
});
