import { COMMON_MEDIA_QUERIES } from "./utils.js"


export function header() {

    const burger = document.querySelector('.header__burger')
    const menu = document.querySelector('.menu')


    let menuOpened = true

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('show')

        if (menuOpened) {
            lenisScroll.stop();
            menuOpened = false
        } else {
            lenisScroll.start();
            menuOpened = true
        }
    })

    const links = document.querySelectorAll('[data-anchor]')

    links.forEach((link => {
        link.addEventListener('click', () => {
            let target = link.getAttribute('data-anchor')

            gsap.to(window, {
                scrollTo: {
                    y: `#${target}`,
                    offsetY: 0,
                    duration: 0,
                },
            });

            if (!menuOpened) {
                lenisScroll.start();
                burger.classList.remove('active')
                menu.classList.remove('show')
                menuOpened = true
            }
        })
    }))

    if (COMMON_MEDIA_QUERIES.TABLET) {
        menu.setAttribute('data-lenis-prevent', '')
    }


    document.addEventListener('click', (e) => {
        const allSubMenus = document.querySelectorAll('.submenu');
        const allSubMenuLinks = document.querySelectorAll('.nav-submenu__link');

        let clickedInsideMenu = false;

        // Проверка клика по любому .nav-submenu__link
        allSubMenuLinks.forEach(link => {
            if (link.contains(e.target)) {
                const subMenu = link.closest('.nav__item').querySelector('.submenu');
                if (subMenu) {
                    subMenu.classList.add('show');
                }
                clickedInsideMenu = true;
            }
        });

        // Проверка клика по вложенному .submenu
        allSubMenus.forEach(menu => {
            if (menu.contains(e.target)) {
                clickedInsideMenu = true;
            }
        });

        // Закрываем все .submenu, если клик был вне меню и ссылок
        if (!clickedInsideMenu) {
            allSubMenus.forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

}