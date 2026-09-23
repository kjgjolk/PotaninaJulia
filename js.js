const sliders = document.querySelectorAll('.Slider');



sliders.forEach(Slider => {

    const Photo = Slider.querySelector('.Photo');
    const Squares = Slider.querySelectorAll('.Square');

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
    document.querySelectorAll('.month-link');
const months =
    document.querySelectorAll('.History > .Slider');

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