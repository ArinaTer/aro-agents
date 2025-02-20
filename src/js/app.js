import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { lenis } from "./components/lenis.js"
import { about } from "./sections/about.js";
import { workflow } from "./sections/workflow.js";
import { header } from "./components/header.js";
import { modals } from "./components/modals.js";
import { check } from "./components/check.js";
import { preloader } from "./components/preloader.js";
import { animations } from './components/animations.js'
import { validationPhoneInput } from "./components/validation-phone-input.js";

window.addEventListener("onbeforeunload", function () {
    window.scrollTo(0, 0);
    gsap.to(window, { duration: 0, scrollTo: 0 });
});
window.addEventListener("unload", function () {
    window.scrollTo(0, 0);
    gsap.to(window, { duration: 0, scrollTo: 0 });
});


window.addEventListener("load", () => {
    plugins()
    lenis()
    lenisScroll.stop()    
    
    preloader();

    validationPhoneInput()
    header()
    about()
    workflow()
    modals()
    animations()
    // check()

    // Zoom Site Disabled
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });

    document.addEventListener('gesturechange', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });

    document.addEventListener('gestureend', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });
})