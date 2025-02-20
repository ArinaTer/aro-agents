export function check() {
    const sections = gsap.utils.toArray(".check-anim");

    sections.forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 50%",
            onEnter: () => {
                section.classList.add("check-active");
            },
            onEnterBack: () => {
                section.classList.add("check-active");
            },
            once: true,
            markers: true,
        });
    });
}