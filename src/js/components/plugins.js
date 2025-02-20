import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import Swiper from "swiper";
import { Controller, EffectFade, FreeMode, Thumbs } from "swiper/modules"

export function plugins() {
    window.gsap = gsap;
    window.ScrollTrigger = ScrollTrigger;
    window.ScrollToPlugin = ScrollToPlugin;
    window.Swiper = Swiper;
    window.EffectFade = EffectFade;
    window.Controller = Controller;
    window.FreeMode = FreeMode;
    window.Thumbs = Thumbs;
    Swiper.use([FreeMode, Controller, EffectFade, Thumbs])

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}
