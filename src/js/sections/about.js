import { queryMatches } from "../components/utils.js";

export function about() {
    const MOBILE = queryMatches(576, "max")


    if (MOBILE) {

        let swiperThumbMob = new Swiper(".about__swiper-mob .about__swiper-thumbs", {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 2.3,
            centeredSlides: true,
            allowTouchMove: false,
            slideToClickedSlide: true,
            loopAdditionalSlides: 2,

            breakpoints: {
                450: {
                    slidesPerView: 3,
                }
            }
        })

        let swiperMainMob = new Swiper(".about__swiper-mob .about__swiper-main", {
            loop: true,
            centeredSlides: true,
            spaceBetween: 10,
            slidesPerView: 1.4,
            allowTouchMove: false,
            watchSlidesProgress: true,
            loopAdditionalSlides: 2,
        })

        swiperThumbMob.controller.control = swiperMainMob

    } else {
        setTimeout(() => {
            document.querySelector('.about__swiper-desktop .swiper-slide video').play()
        }, 1000);

        // Desktop Swiper
        let swiperMain = new Swiper(".about__swiper-desktop .about__swiper-main", {
            loop: true,
            slidesPerView: 1,
            allowTouchMove: false,
            watchSlidesProgress: true,
            effect: 'fade',
        })

        let swiperThumb = new Swiper(".about__swiper-desktop .about__swiper-thumbs", {
            loop: true,
            // freeMode: true,
            spaceBetween: 20,
            slidesPerView: 4,
            watchSlidesProgress: true,
            centeredSlides: true,
            slideToClickedSlide: true,
            loopAdditionalSlides: 5,
            allowTouchMove: false,
            on: {
                click: function () {
                    const mainSlide = swiperMain.slides[swiperMain.activeIndex];
                    const videoElement = mainSlide.querySelector("video");
                    if (videoElement) {
                        videoElement.pause();
                        videoElement.currentTime = 0;
                        videoElement.play();
                    }
                },
            },
            thumbs: {
                swiper: swiperMain,
            },

            breakpoints: {
                576: { slidesPerView: 4, },
                768: { slidesPerView: 5, },
                992: { slidesPerView: 6, }
            }
        });
    }

}