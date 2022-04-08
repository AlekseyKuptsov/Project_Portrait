import { getResource } from "../services/requests";

const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
          btn = document.querySelector(trigger),
          container = document.querySelector('.styles .row');

    // btn.addEventListener('click', () => {
    //     getResource('http://localhost:3000/styles')
    //     .then(res => createCards(res)),
    //     .catch(error => console.log(error));
    //     
    //      btn.style.display = 'none';
    // }); 
    
    // function createCards(res) {
    //     res.forEach(item => {
    //         let card = document.createElement('div');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
    //         card.innerHTML = `
    //             <div class="styles-block">
    //                 <img src="${item.src}" alt>
    //                 <h4>${item.title}</h4>
    //                 <a href="${item.link}">Подробнее</a>
    //             </div>
    //         `;
    //         container.appendChild(card);
    //     });
    // }

    cards.forEach(item => {
        item.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(item => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.style.display = 'none';
    });
};

export default showMoreStyles;