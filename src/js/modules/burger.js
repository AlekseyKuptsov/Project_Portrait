const burger = (selector, menu) => {
    const menuElem = document.querySelector(menu),
          burgerElem = document.querySelector(selector);

    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display == 'none' && window.screen.availWidth < 992) {
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth >= 992) {
            menuElem.style.display = 'none';
        }
    });
};

export default burger;