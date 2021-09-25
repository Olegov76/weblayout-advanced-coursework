const slider = document.querySelector('.swiper-container');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');

let mySwiper = new Swiper(slider, {
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

let mySwiper2 = new Swiper(slider2, {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

let mySwiper3 = new Swiper(slider3, {
        slidesPerView: 2,
        spaceBetween: 32,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    // кастомный селект
const defaultSelect = () => {
    const element = document.querySelector('.header__select');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
};

defaultSelect();
// маска для телефона

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999 99 99");
im.mask(selector);

// кастомизация формы

new JustValidate('.feedback__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            },
        },
        mail: {
            required: true,
            email: true
        },
    },
    messages: {
        name: 'Недопустимый формат',
        tel: 'Недопустимый формат',
        mail: 'Недопустимый формат'
    },
});


// const defaultSelect = () => {
//     const element = document.querySelector('#selectCustom');
//     const choices = new Choices(element, {
//         searchEnabled: false,
//     });
// };
