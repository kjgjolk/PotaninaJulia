/* ==========================================
   СЛАЙДЕРЫ ФОТОГРАФИЙ
   ИЮНЬ / ИЮЛЬ / АВГУСТ
========================================== */

const sliders = document.querySelectorAll('.Slider');

sliders.forEach(slider => {

    const photo = slider.querySelector('.photo');
    const squares = slider.querySelectorAll('.square');

    squares.forEach((square, index) => {

        square.addEventListener('click', function () {

            const maxScroll =
                photo.scrollWidth - photo.clientWidth;

            const maxIndex =
                squares.length - 1;

            const scrollPosition =
                maxScroll * (index / maxIndex);

            photo.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });

        });

    });

});


/* ==========================================
   ПЕРЕХОДЫ ИЗ ШАПКИ
   ИЮНЬ / ИЮЛЬ / АВГУСТ
========================================== */

const monthLinks =
    document.querySelectorAll('.month-link');

const months =
    document.querySelectorAll('.history > .Slider');


monthLinks.forEach(link => {

    link.addEventListener('click', function (event) {

        event.preventDefault();

        const index =
            Number(this.dataset.index);

        months[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

});