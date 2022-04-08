const sliders = (slides, direction, prev, next) => {
    let index = 1,
        paused;
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            index = 1;
        } else if (n < 1) {
            index = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[index - 1].style.display = 'block';
    }

    showSlides(index);

    function changeSlide(n) {
        index += n;
        showSlides(index);
    }

    try  {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            changeSlide(-1);
            items[index - 1].classList.remove('slideInLeft');
            items[index - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            changeSlide(1);
            items[index - 1].classList.remove('slideInRight');
            items[index - 1].classList.add('slideInLeft');
        });
    } catch(err) {

    }

    activateAnomation();

    function activateAnomation() {
        if (direction === 'vertical') {
            paused = setInterval(function () {
                changeSlide(1);
                items[index - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function () {
                changeSlide(1);
                items[index - 1].classList.remove('slideInRight');
                items[index - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    items[index].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[index].parentNode.addEventListener('mouseleave', () => {
        activateAnomation();
    });
};

export default sliders;