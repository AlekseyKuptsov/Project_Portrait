import modals from "./modules/modals";
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyle';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scroll from './modules/scroll';
import drop from './modules/dragnDrop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {
        summary: 0
    };

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical', '', '');
    forms(modalState);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '.styles-2');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', modalState);
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger', '.burger-menu');
    scroll('.pageup');
    drop();
});