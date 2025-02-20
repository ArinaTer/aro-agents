export function animations() {


    const sections = gsap.utils.toArray(".section-anim");

    sections.forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 70%",
            onEnter: () => {
                section.classList.add("section-anim-active");
            },
            onEnterBack: () => {
                section.classList.add("section-anim-active");
            },
            once: true,
            // markers: true,
        });
    });

}