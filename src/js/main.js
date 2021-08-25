


const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        init() {
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });

            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    },
})

// кастомный селект

const defaultSelect = () => {
    const element = document.querySelector('#selectCustom');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
};

defaultSelect();