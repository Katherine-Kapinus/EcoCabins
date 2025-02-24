const swiper = new Swiper('.materials__slider', {
    loop: true,

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


window.addEventListener('scroll', function () {    
    let windowHeight = window.innerHeight; // Висота блоку header
    let maxScroll = windowHeight * 0.008; // Різниця між висотою вікна і висотою header

    // Отримуємо поточний скрол
    let scrollTop = window.scrollY;

    // Обчислюємо відсоток прокрутки (від 0 до 1)
    let percentage = Math.min(scrollTop / maxScroll, 1); 

    // Задаємо CSS змінну для непрозорості фону
    document.documentElement.style.setProperty('--scroll-opacity-swiper', percentage);
});


window.addEventListener('click', function(){
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__body').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});
