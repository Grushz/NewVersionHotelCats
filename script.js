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

/* Выше заданы основные переменные которыми мы будем манипулировать
 P.S. Вероятно так не делают, но я постарался сам понять как это сделать XD
 Если данная реализация совсем не годится, то перепишу на более правильный манер
 И да, в преспективе маштабирования кол-ва изображений такой метод слишком труднозатратен ИМХО*/

/* Алгоритм переключения карточек комнат 
при нажатии на каждую из навигационных точек */
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

// Управление карточками комнат с помощью кнопки назад
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

// Управление карточками комнат с помощью кнопки вперед
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

// Алгоритм переключения карточек комнат по таймеру
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

// Остановка таймера при клике на любой элемент
document.addEventListener('click', stopIntervalOnClick);
function stopIntervalOnClick() {
    clearInterval(timerId); // Останавливаем интервал
    document.removeEventListener('click', stopIntervalOnClick); // Удаляем обработчик клика
    console.log('Интервал остановлен!');
}

// Управление карточками отзывов с помощью кнопки вперед
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

// Управление карточками отзывов с помощью кнопки назад
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
        review_card.classList.remove('right-back');
        review_dot2.classList.add('slider-dot-active');
        review_card.classList.add('right-three');
    }
    else if (review_dot1.classList.contains('slider-dot-active')) {
        review_dot1.classList.remove('slider-dot-active');
        review_card.classList.remove('right-two');
        review_dot3.classList.add('slider-dot-active');
        review_card.classList.add('left-back');
        review_card.classList.remove('right-back');
    }
}

/* Алгоритм перемещения карточек отзывов 
при нажатии на каждую из навигационных точек */
review_dot1.onclick = function () {
    if (review_dot2.classList.contains('slider-dot-active')) {
        review_dot2.classList.remove('slider-dot-active');
        review_dot1.classList.add('slider-dot-active');
        review_card.classList.remove('right-three');
        review_card.classList.remove('left-two');
        review_card.classList.add('right-two');
    }

    if (review_dot3.classList.contains('slider-dot-active')) {
        review_dot3.classList.remove('slider-dot-active');
        review_dot1.classList.add('slider-dot-active');
        review_card.classList.remove('left-three');
        review_card.classList.remove('left-back');
        review_card.classList.add('right-back');
    }

}
review_dot2.onclick = function () {
    if (review_dot1.classList.contains('slider-dot-active')) {
        review_dot1.classList.remove('slider-dot-active');
        review_dot2.classList.add('slider-dot-active');
        review_card.classList.remove('right-back');
        review_card.classList.add('left-two');
        review_card.classList.remove('right-two');
    }

    if (review_dot3.classList.contains('slider-dot-active')) {
        review_dot3.classList.remove('slider-dot-active');
        review_dot2.classList.add('slider-dot-active');
        review_card.classList.remove('left-three');
        review_card.classList.add('right-three');
        review_card.classList.remove('left-back');
    }
}
review_dot3.onclick = function () {
    if (review_dot1.classList.contains('slider-dot-active')) {
        review_dot1.classList.remove('slider-dot-active');
        review_dot3.classList.add('slider-dot-active'); 
        review_card.classList.remove('right-back');
        review_card.classList.add('left-back');
        review_card.classList.remove('right-two');
    }

    if (review_dot2.classList.contains('slider-dot-active')) {
        review_dot2.classList.remove('slider-dot-active');
        review_dot3.classList.add('slider-dot-active');
        review_card.classList.remove('right-three');
        review_card.classList.remove('left-two');
        review_card.classList.add('left-three');
    }
}

/* Отключение обновления страницы после нажатия кнопки в форме
Сделано для того, чтобы можно было отобразить подтверждение */
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
});

// Вызов попапа при нажатии на кнопку "Забронировать"
button_high.onclick = function () {
    popup_wrapper.classList.toggle('hidden');
    popup_wrapper.classList.toggle('show');
    popup.classList.toggle('hidden');
    popup.classList.toggle('show');
}
document.querySelectorAll(".button-low").forEach(el => {
    el.addEventListener("click", () => {
        popup_wrapper.classList.toggle('hidden');
        popup_wrapper.classList.toggle('show');
        popup.classList.toggle('hidden');
        popup.classList.toggle('show');
    })
})

// Добавление маски для номера телефона (Честно взятое из интернета) 
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
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
    popup.classList.toggle('hidden');
    popup.classList.toggle('show');
}
button_close_accept.onclick = function () {
    popup_accept.classList.toggle('hidden');
    popup_accept.classList.toggle('show');
    popup_wrapper.classList.toggle('hidden');
    popup_wrapper.classList.toggle('show');
    location.reload(); // перезагружаем страницу
}

// Переключение попапа при нажатии на кнопку "Забронировать"
button_reservation.onclick = function () {
    
    popup.classList.toggle('hidden');
    popup.classList.toggle('show');
    popup_accept.classList.toggle('hidden');
    popup_accept.classList.toggle('show');
}

//Закрытие всплывающего окна после подтверждения и нажатия кнопки "ОК"
button_accept.onclick = function () {
    popup_accept.classList.toggle('hidden');
    popup_accept.classList.toggle('show');
    popup_wrapper.classList.toggle('hidden');
    popup_wrapper.classList.toggle('show');
    location.reload(); // перезагружаем страницу
}

