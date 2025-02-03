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
    let maxScroll = windowHeight * 0.2; // Різниця між висотою вікна і висотою header

    // Отримуємо поточний скрол
    let scrollTop = window.scrollY;

    // Обчислюємо відсоток прокрутки (від 0 до 1)
    let percentage = Math.min(scrollTop / maxScroll, 1); 

    // Задаємо CSS змінну для непрозорості фону
    document.documentElement.style.setProperty('--scroll-opacity', percentage);

    // Додаємо або видаляємо клас 'scroll', залежно від того, чи є скрол
    document.querySelector('.header').classList.toggle('scroll', scrollTop > 0);
});