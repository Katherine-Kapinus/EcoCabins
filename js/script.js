const swiper = new Swiper('.materials__slider', {
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Для можливості натискання
    },
});


//- gradient for header
window.addEventListener('scroll', function () {    
    let windowHeight = window.innerHeight; // Висота блоку header
    let maxScrollOpacity = windowHeight * 0.2; 
    let maxScrollBlue = windowHeight * 0.45; 

    // Отримуємо поточний скрол
    let scrollTop = window.scrollY;

    // Обчислюємо відсоток прокрутки для непрозорості (від 0 до 1)
    let opacityPercentage = Math.min(Math.sqrt(scrollTop / maxScrollOpacity), 1);

    // Обчислюємо відсоток прокрутки для переходу до синього (від 0 до 1)
    let bluePercentage = Math.max(0, Math.min((scrollTop - maxScrollOpacity) / (maxScrollBlue - maxScrollOpacity), 1)); 

    // Задаємо CSS змінну для непрозорості фону
    document.documentElement.style.setProperty('--scroll-opacity-header-before', opacityPercentage);

    // Задаємо CSS змінну для переходу до синього кольору
    document.documentElement.style.setProperty('--scroll-header-blue', bluePercentage);

    // Додаємо клас scroll, якщо є прокрутка
    document.querySelector('.header').classList.toggle('scroll', scrollTop > 0);
    
    // Додаємо клас blue тільки коли досягнуто порогу для синього кольору
    document.querySelector('.header').classList.toggle('blue', scrollTop > maxScrollBlue);
});


//- opasity-swiper-before (white-block)
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

//- opasity-swiper
document.documentElement.style.setProperty('--scroll-opacity-swiper', 0); // Гарантуємо, що спочатку буде 0

function updateOpacity() {    
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;  
    let maxScroll = Math.max(windowHeight * 0.2, 1);  // Прозорість змінюється після прокручування на 100-200 пікселів
    let scrollTop = window.scrollY || document.documentElement.scrollTop; 
    let percentage = Math.min(scrollTop / maxScroll, 1); 

    document.documentElement.style.setProperty('--scroll-opacity-swiper', percentage);
}

//- Викликаємо updateOpacity перед повним завантаженням
updateOpacity();

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

