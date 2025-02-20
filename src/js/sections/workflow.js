import { queryMatches } from "../components/utils.js";

export function workflow() {
    const MOBILE = queryMatches(576, "max")

    if (!MOBILE) {
        const accItems = document.querySelectorAll('.accordion__item')

        accItems.forEach((el, i) => {
            const btn = el.querySelector('.accordion__toggle-btn');

            btn.addEventListener('click', () => {
                accItems.forEach(el => el.classList.remove('is-opened'));

                el.classList.add('is-opened');
            });
        });
    }else {

        let workflowImages = new Swiper(".workflow-swiper--image", {
            slidesPerView: 1,
            effect: 'fade',
            allowTouchMove: false,
        })

        let workflow = new Swiper(".workflow__wrapper", {
            spaceBetween: 20,
            slidesPerView: 1.3,
            wrapperClass: 'workflow__accordion',
            slideClass: 'accordion__item', 

            thumbs: {
                swiper: workflowImages
            }
        })

        // workflow.controller.control = workflowImages;

    }

}