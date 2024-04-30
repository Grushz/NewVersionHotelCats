let room_first = document.querySelector('.room-first');
let room_second = document.querySelector('.room-second');
let room_third = document.querySelector('.room-third');
let room_arrow_back = document.querySelector('.room-arrow-back');
let room_arrow_next = document.querySelector('.room-arrow-next');
let button_close = document.querySelector('.close');
let room_dot1 = document.querySelector('.room-dot1');
let room_dot2 = document.querySelector('.room-dot2');
let room_dot3 = document.querySelector('.room-dot3');
let button_high = document.querySelector('.button-high');
let popup_wrapper = document.querySelector('.popup-wrapper');
let review_card = document.querySelector('.review-card');
let review_arrow_back = document.querySelector('.review-arrow-back');
let review_arrow_next = document.querySelector('.review-arrow-next');
let review_dot1 = document.querySelector('.review-dot1');
let review_dot2 = document.querySelector('.review-dot2');
let review_dot3 = document.querySelector('.review-dot3');

room_dot1.onclick = function () {
    room_dot1.classList.add('slider-dot-active');
    room_dot2.classList.remove('slider-dot-active');
    room_dot3.classList.remove('slider-dot-active');
    room_first.classList.remove('hidden');
    room_first.classList.add('show');
    room_second.classList.add('hidden');
    room_second.classList.remove('show');
    room_third.classList.remove('show');
    room_third.classList.add('hidden');
}

room_dot2.onclick = function () {
    room_dot1.classList.remove('slider-dot-active');
    room_dot2.classList.add('slider-dot-active');
    room_dot3.classList.remove('slider-dot-active');
    room_first.classList.add('hidden');
    room_first.classList.remove('show');
    room_second.classList.remove('hidden');
    room_second.classList.add('show');
    room_third.classList.remove('show');
    room_third.classList.add('hidden');
}

room_dot3.onclick = function () {
    room_dot1.classList.remove('slider-dot-active');
    room_dot2.classList.remove('slider-dot-active');
    room_dot3.classList.add('slider-dot-active');
    room_first.classList.add('hidden');
    room_first.classList.remove('show');
    room_second.classList.add('hidden');
    room_second.classList.remove('show');
    room_third.classList.add('show');
    room_third.classList.remove('hidden');
}



room_arrow_back.onclick = function () {
    if (room_first.classList.contains('show')) {
        room_first.classList.toggle('hidden');
        room_first.classList.toggle('show');
        room_third.classList.toggle('hidden');
        room_third.classList.toggle('show');
        room_dot1.classList.remove('slider-dot-active');
        room_dot2.classList.remove('slider-dot-active');
        room_dot3.classList.add('slider-dot-active');
    }
    else if (room_second.classList.contains('show')) {
        room_second.classList.toggle('hidden');
        room_second.classList.toggle('show');
        room_first.classList.toggle('hidden');
        room_first.classList.toggle('show');
        room_dot1.classList.add('slider-dot-active');
        room_dot2.classList.remove('slider-dot-active');
        room_dot3.classList.remove('slider-dot-active');
    }
    else if (room_third.classList.contains('show')) {
        room_third.classList.toggle('hidden');
        room_third.classList.toggle('show');
        room_second.classList.toggle('hidden');
        room_second.classList.toggle('show');
        room_dot1.classList.remove('slider-dot-active');
        room_dot2.classList.add('slider-dot-active');
        room_dot3.classList.remove('slider-dot-active');
    }
}

room_arrow_next.onclick = function () {
    if (room_first.classList.contains('show')) {
        room_first.classList.toggle('hidden');
        room_first.classList.toggle('show');
        room_second.classList.toggle('hidden');
        room_second.classList.toggle('show');
        room_dot1.classList.remove('slider-dot-active');
        room_dot2.classList.add('slider-dot-active');
        room_dot3.classList.remove('slider-dot-active');
    }
    else if (room_second.classList.contains('show')) {
        room_second.classList.toggle('hidden');
        room_second.classList.toggle('show');
        room_third.classList.toggle('hidden');
        room_third.classList.toggle('show');
        room_dot1.classList.remove('slider-dot-active');
        room_dot2.classList.remove('slider-dot-active');
        room_dot3.classList.add('slider-dot-active');
    }
    else if (room_third.classList.contains('show')) {
        room_third.classList.toggle('hidden');
        room_third.classList.toggle('show');
        room_first.classList.toggle('hidden');
        room_first.classList.toggle('show');
        room_dot1.classList.add('slider-dot-active');
        room_dot2.classList.remove('slider-dot-active');
        room_dot3.classList.remove('slider-dot-active');
    }
}

let room_Index = 1;
let timerId = setInterval(function () {
    let room_Count = 3;
    room_Index++;
    if (room_Index > room_Count) {
        room_Index = 1;
    }
    console.log(room_Index);
    if (room_Index == 1) {
        room_dot1.classList.add('slider-dot-active');
        room_dot2.classList.remove('slider-dot-active');
        room_dot3.classList.remove('slider-dot-active');
        room_first.classList.remove('hidden');
        room_first.classList.add('show');
        room_second.classList.add('hidden');
        room_second.classList.remove('show');
        room_third.classList.remove('show');
        room_third.classList.add('hidden');
    }
    else if (room_Index == 2) {
        room_dot1.classList.remove('slider-dot-active');
        room_dot2.classList.add('slider-dot-active');
        room_dot3.classList.remove('slider-dot-active');
        room_first.classList.add('hidden');
        room_first.classList.remove('show');
        room_second.classList.remove('hidden');
        room_second.classList.add('show');
        room_third.classList.remove('show');
        room_third.classList.add('hidden');
    }
    else if (room_Index == 3) {
        room_dot1.classList.remove('slider-dot-active');
        room_dot2.classList.remove('slider-dot-active');
        room_dot3.classList.add('slider-dot-active');
        room_first.classList.add('hidden');
        room_first.classList.remove('show');
        room_second.classList.add('hidden');
        room_second.classList.remove('show');
        room_third.classList.add('show');
        room_third.classList.remove('hidden');
    }

}, 5000);

document.addEventListener('click', stopIntervalOnClick);

function stopIntervalOnClick() {
    clearInterval(timerId); // Останавливаем интервал
    document.removeEventListener('click', stopIntervalOnClick); // Удаляем обработчик клика
    console.log('Интервал остановлен!');
}

button_high.onclick = function () {
    popup_wrapper.classList.toggle('hidden');
    popup_wrapper.classList.toggle('show');
}

document.querySelectorAll(".button-low").forEach(el => {
    el.addEventListener("click", () => {
        popup_wrapper.classList.toggle('hidden');
        popup_wrapper.classList.toggle('show');
    })
})

button_close.onclick = function () {
    popup_wrapper.classList.toggle('hidden');
    popup_wrapper.classList.toggle('show');
}

review_arrow_next.onclick = function () {
    if (review_dot1.classList.contains('slider-dot-active')) {
        review_dot1.classList.remove('slider-dot-active');
        review_dot2.classList.add('slider-dot-active');
        review_card.classList.remove('right-back');
        review_card.classList.add('left-two');
        review_card.classList.remove('right-two');
    }
    else if (review_dot2.classList.contains('slider-dot-active')) {
        review_dot2.classList.remove('slider-dot-active');
        review_card.classList.remove('left-two');
        review_card.classList.remove('right-three');
        review_dot3.classList.add('slider-dot-active');
        review_card.classList.add('left-three');
    }
    else if (review_dot3.classList.contains('slider-dot-active')) {
        review_dot3.classList.remove('slider-dot-active');
        review_card.classList.remove('left-three');
        review_card.classList.remove('left-back');
        review_dot1.classList.add('slider-dot-active');
        review_card.classList.add('right-back');
    }
}

review_arrow_back.onclick = function () {
    if (review_dot2.classList.contains('slider-dot-active')) {
        review_dot2.classList.remove('slider-dot-active');
        review_dot1.classList.add('slider-dot-active');
        review_card.classList.remove('right-three');
        review_card.classList.remove('left-two');
        review_card.classList.add('right-two');
    }
    else if (review_dot3.classList.contains('slider-dot-active')) {
        review_dot3.classList.remove('slider-dot-active');
        review_card.classList.remove('left-three');
        review_card.classList.remove('left-back');
        review_dot2.classList.add('slider-dot-active');
        review_card.classList.add('right-three');
    }
    else if (review_dot1.classList.contains('slider-dot-active')) {
        review_dot1.classList.remove('slider-dot-active');
        review_card.classList.remove('right-two');
        review_dot3.classList.add('slider-dot-active');
        review_card.classList.add('left-back');
    }
}