const scroll = (selector) => {
    const btnUp = document.querySelector(selector),
          element = document.documentElement,
          body = document.body;

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1600) {
            btnUp.classList.add('animated', 'fadeIn');
            btnUp.classList.remove('fadeOut');
        } else {
            btnUp.style.opacity = "0";
            btnUp.classList.add('fadeOut');
            btnUp.classList.remove('fadeIn');
        }
    });

    // Smooth scrolling

    const anchors = document.querySelectorAll('a[href*="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substring(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Scrolling with raf

    // let links = document.querySelectorAll('[href^="#"]'),
    //     speed = 0.3;

    // links.forEach(link => {
    //     link.addEventListener('click', function (event) {
    //         event.preventDefault();

    //         let widthTop = document.documentElement.scrollTop,
    //             hash = this.hash,
    //             toBlock = document.querySelector(hash).getBoundingClientRect().top,
    //             start = null;

    //         requestAnimationFrame(step);

    //         function step(time) {
    //             if (start === null) {
    //                 start = time;
    //             }

    //             let progress = time - start,
    //                 r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

    //             document.documentElement.scrollTo(0, r);

    //             if (r != widthTop + toBlock) {
    //                 requestAnimationFrame(step);
    //             } else {
    //                 location.hash = hash;
    //             }
    //         }
    //     });
    // });


    // Pure js scrolling

    // const calcScroll = () => {
    //     btnUp.addEventListener('click', function (event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             let hashElement = document.querySelector(this.hash),
    //                 hashElementTop = 0;

    //             while (hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };

    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;

    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }

    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };

    // calcScroll();

};

export default scroll;