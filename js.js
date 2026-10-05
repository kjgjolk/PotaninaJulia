const sliders = document.querySelectorAll('.month-slider');

sliders.forEach(Slider => {

    const Photo = Slider.querySelector('.month-slider__photos');
    const Squares = Slider.querySelectorAll('.month-slider__dot');

    Squares.forEach((Square, index) => {

        Square.addEventListener('click', function () {

            const maxScroll =
                Photo.scrollWidth - Photo.clientWidth;

            const maxIndex =
                Squares.length - 1;

            const scrollPosition =
                maxScroll * (index / maxIndex);

            Photo.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });

        });

    });

});


const monthLinks =
    document.querySelectorAll('.site-header__month-link');

const months =
    document.querySelectorAll('.history > .month-slider');

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