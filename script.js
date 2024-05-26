let room_first = document.querySelector('.room-first');
let room_second = document.querySelector('.room-second');
let room_third = document.querySelector('.room-third');
let room_arrow_back = document.querySelector('.room-arrow-back');
let room_arrow_next = document.querySelector('.room-arrow-next');
let button_close = document.querySelector('.close');
let button_close_accept = document.querySelector('.close-accept');
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
let button_reservation = document.querySelector('.button-reservation');
let popup = document.querySelector('.popup');
let popup_accept = document.querySelector('.popup-accept');
let button_accept = document.querySelector('.button-accept');
let popup_wrapper_inner = document.querySelector('.popup-wrapper-inner');

const sliderDotActive = 'slider-dot-active';
const reviewDots = document.querySelectorAll('.review-dot');
const roomDots = document.querySelectorAll('.room-dot');

/* Выше заданы основные переменные которыми мы будем манипулировать


/* Алгоритм переключения карточек комнат
при нажатии на каждую из навигационных точек */
function switchSlide(currentIndex, room_Index) {
    const dots = Array.from(document.querySelectorAll('.room-dot'));
    const slides = Array.from(document.querySelectorAll('.room'));
    dots.forEach(dot => dot.classList.remove('slider-dot-active'));
    slides.forEach(slide => {
        slide.classList.remove('show');
        slide.classList.add('hidden');
    });

    dots[room_Index].classList.add('slider-dot-active');
    slides[room_Index].classList.remove('hidden');
    slides[room_Index].classList.add('show');
}

function animationSwitch(review_Index, currentIndex) {

    let start = Date.now(); // запомнить время начала

    let timer = setInterval(function () {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // закончить анимацию через 2 секунды
            return;
        }

        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(timePassed);

    }, 10);

    // в то время как timePassed идёт от 0 до 2000
    if (review_Index === 1) {
        function draw(timePassed) {
            review_card.style.right = `${timePassed / 4}px`;
        }
    }
    else if (review_Index === 2) {
        function draw(timePassed) {
            review_card.style.right = `${250 + timePassed / 4}px`;
        }
    }
    else if (review_Index === 0) {
        function draw(timePassed) {
            review_card.style.right = `${500 - timePassed / 2}px`;
        }
    }
    console.log(review_Index);
}

const switchReviews = (currentIndex, review_Index) => {
    const dots = Array.from(document.querySelectorAll('.review-dot'));
    dots.forEach((dot) => dot.classList.remove(sliderDotActive));
    dots[review_Index].classList.add(sliderDotActive);

    if (review_Index === 0) {
        review_card.style.right = '0px'
    } else {
        animationSwitch(review_Index);
    }
}

// Действия при клике на каждую точку навигации
const onDotClick = (index, isReview) => {
    if (isReview) {
        switchReviews(0, index)
    } else {
        switchSlide(0, index)
    }
}

reviewDots.forEach((dot, index) => {
    dot.onclick = () => onDotClick(index, true);
})

roomDots.forEach((dot, index) => {
    dot.onclick = () => onDotClick(index, false);
})

const onCurrentIndexRoomReturn = () => {
    const classListCheck = (name) => Array.from(name.classList).includes('show')

    if (classListCheck(room_first)) {
        return 0;
    } else if (classListCheck(room_second)) {
        return 1;
    } else {
        return 2;
    }
}

const onRoomIndexReturn = (currentIndex, isBack) => {
    if (isBack) {
        if (currentIndex === 0) {
            return 2;
        } else {
            return currentIndex - 1;
        }
    } else {
        if (currentIndex === 2) {
            return 0;
        } else {
            return currentIndex + 1;
        }
    }
}

const onPrevNextRoomsButtonsClick = (isBack) => {
    let currentIndex = onCurrentIndexRoomReturn();
    let room_Index = onRoomIndexReturn(currentIndex, isBack);
    switchSlide(currentIndex, room_Index);
}

// Переключение карточек комнат при нажатии на кнопку назад
room_arrow_back.onclick = () => {
    onPrevNextRoomsButtonsClick(true);
}

// Переключение карточек комнат при нажатии на кнопку вперед
room_arrow_next.onclick = () => {
    onPrevNextRoomsButtonsClick(false)
}

const onCurrentIndexReviewReturn = (styleIndex) => {
    if (styleIndex === 0) {
        return 0;
    } else if (styleIndex === 250) {
        return 1;
    } else {
        return 2;
    }
}

const onPrevNextReviewButtonsClick = (isBack) => {
    const style = review_card.style.right;
    const styleIndex = Number(style.substring(0, style.length - 2));
    const currentIndex = onCurrentIndexReviewReturn(styleIndex)
    const review_Index = onRoomIndexReturn(currentIndex, isBack);
    switchReviews(currentIndex, review_Index)
}

review_arrow_back.onclick = () => {
    onPrevNextReviewButtonsClick(true);
}

review_arrow_next.onclick = () => {
    onPrevNextReviewButtonsClick(false);
}

let room_Index = 0; // Индекс текущей карточки
const room_Count = 3; // Общее количество карточек

// Устанавливаем интервал для автоматического переключения карточек
let timerId = setInterval(function () {
    room_Index = (room_Index + 1) % room_Count; // Увеличиваем индекс, возвращаемся к 0 после последней карточки
    switchSlide(0, room_Index); // Переключаем карточки
}, 5000); // Интервал переключения карточек (5 секунд)

// Остановка таймера при клике на любой элемент
document.addEventListener('click', stopIntervalOnClick);

function stopIntervalOnClick() {
    clearInterval(timerId); // Останавливаем интервал
    document.removeEventListener('click', stopIntervalOnClick); // Удаляем обработчик клика
    console.log('Интервал остановлен!');
}

/* Отключение обновления страницы после нажатия кнопки в форме
Сделано для того, чтобы можно было отобразить подтверждение */
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.querySelector('[name="username"]'); //получаем поле name
    const petname = form.querySelector('[name="petname"]'); //получаем поле age
    const phone = form.querySelector('[name="phone-number"]'); //получаем поле terms
    const email = form.querySelector('[name="e-mail"]');
    const datein = form.querySelector('[name="datein"]');
    const dateout = form.querySelector('[name="dateout"]');

    const data = {
        username: username.value,
        petname: petname.value,
        phone: phone.value,
        email: email.value,
        datein: datein.value,
        dateout: dateout.value
    };
    console.log(data)
});

// Вызов попапа при нажатии на кнопку "Забронировать"

document.querySelectorAll(".button-open-popup").forEach(el => {
    el.addEventListener("click", () => {
        popup_wrapper.classList.toggle('hidden');
        popup_wrapper.classList.toggle('show');
        popup_wrapper_inner.classList.toggle('hidden');
        popup_wrapper_inner.classList.toggle('show');
        popup.classList.toggle('hidden');
        popup.classList.toggle('show');
    })
})

// Добавление маски для номера телефона (Честно взятое из интернета)
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
});

// Закрытие попап при нажатии на кнопку "Закрыть"
button_close.onclick = function () {
    popup_wrapper.classList.toggle('hidden');
    popup_wrapper.classList.toggle('show');
    popup_wrapper_inner.classList.toggle('hidden');
    popup_wrapper_inner.classList.toggle('show');
    popup.classList.toggle('hidden');
    popup.classList.toggle('show');
}
button_close_accept.onclick = function () {
    popup_accept.classList.toggle('hidden');
    popup_accept.classList.toggle('show');
    popup_wrapper.classList.toggle('hidden');
    popup_wrapper.classList.toggle('show');
    document.querySelector('.form-main').reset();// очищаем форму
}

// Переключение попапа при нажатии на кнопку "Забронировать"
button_reservation.onclick = function () {
    popup.classList.toggle('hidden');
    popup.classList.toggle('show');
    popup_wrapper_inner.classList.toggle('hidden');
    popup_wrapper_inner.classList.toggle('show');
    popup_accept.classList.toggle('hidden');
    popup_accept.classList.toggle('show');
}

//Закрытие всплывающего окна после подтверждения и нажатия кнопки "ОК"
button_accept.onclick = function () {
    popup_accept.classList.toggle('hidden');
    popup_accept.classList.toggle('show');
    popup_wrapper.classList.toggle('hidden');
    popup_wrapper.classList.toggle('show');
    document.querySelector('.form-main').reset();
    // очищаем форму
}

