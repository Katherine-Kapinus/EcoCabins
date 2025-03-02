const swiper = new Swiper('.materials__slider', {
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Для можливості натискання
    },
});

window.addEventListener('scroll', function () {    
    let windowHeight = window.innerHeight; // Висота блоку header
    let maxScrollGrey = windowHeight * 0.1; 
    let maxScrollBlue = windowHeight * 0.6; 

    // Отримуємо поточний скрол
    let scrollTop = window.scrollY;

    // Обчислюємо відсоток прокрутки для непрозорості (від 0 до 1)
    let greyPercentage = Math.min(Math.sqrt(scrollTop / maxScrollGrey), 1);

    // Обчислюємо відсоток прокрутки для переходу до синього (від 0 до 1)
    let bluePercentage = Math.max(0, Math.min((scrollTop - maxScrollGrey) / (maxScrollBlue - maxScrollGrey), 1)); 

    // Задаємо CSS змінну для непрозорості фону
    document.documentElement.style.setProperty('--scroll-opacity--before', greyPercentage);
    document.documentElement.style.setProperty('--scroll-blue', bluePercentage);
    document.querySelector('.header').classList.toggle('scroll', scrollTop > 0);
    document.querySelector('.header').classList.toggle('blue', scrollTop > maxScrollGrey);
});


window.addEventListener('scroll', function () {    
    let windowHeight = window.innerHeight; // Висота блоку header
    let maxScroll = windowHeight * 0.01; // Різниця між висотою вікна і висотою header

    // Отримуємо поточний скрол
    let scrollTop = window.scrollY;

    // Обчислюємо відсоток прокрутки (від 0 до 1)
    let percentage = Math.min(scrollTop / maxScroll, 1); 

    // Задаємо CSS змінну для непрозорості фону
    document.documentElement.style.setProperty('--scroll-opacity-before', percentage);
});


function updateOpacity() {    
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;  
    let maxScroll = Math.max(windowHeight * 0.008, 1); // мінімальне значення 1, щоб уникнути ділення на 0

    let scrollTop = window.scrollY || document.documentElement.scrollTop; 
    let percentage = Math.min(scrollTop / maxScroll, 1); 

    document.documentElement.style.setProperty('--scroll-opacity-swiper', percentage);
}

document.documentElement.style.setProperty('--scroll-opacity-swiper', 0); // Одразу встановлюємо 0

document.addEventListener('DOMContentLoaded', function () {
    updateOpacity(); 
    window.addEventListener('scroll', updateOpacity);
});




document.querySelector('.header__burger').addEventListener('click', function() {
    this.classList.toggle('active'); // Додаємо/знімаємо клас .active у бургер-меню
    document.querySelector('.header__body').classList.toggle('active'); // Аналогічно для меню
    document.body.classList.toggle('active'); // Додаємо/знімаємо клас .active у body
    document.body.classList.toggle('lock'); // Додаємо/знімаємо клас .lock у body
});