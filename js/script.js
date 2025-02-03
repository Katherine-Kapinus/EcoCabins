const swiper = new Swiper('.materials__slider', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Для можливості натискання
    },

});

window.addEventListener('scroll', function () {
    document.querySelector('.header').classList.toggle('scroll', scrollY > 0);
});