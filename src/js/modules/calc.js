const calc = (size, material,options, promo, result, state) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promoCodeBlock = document.querySelector(promo),
          resultBlock = document.querySelector(result);

    let sum;

    function calcFunction() {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (!sizeBlock.value || !materialBlock.value) {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал';
        } else if (promoCodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7) + ' руб.';
        } else {
            resultBlock.textContent = sum + ' руб.';
        }
    }

    function changeState(prop, selector, state) {
        if (selector === promoCodeBlock) {
            state[prop] = selector.value;
        } else {
            state[prop] = selector.querySelector(':checked').text;
        }

        state.summary = sum;
    }

    sizeBlock.addEventListener('change', () => {
        calcFunction();
        changeState('size', sizeBlock, state);
    });
    materialBlock.addEventListener('change', () => {
        calcFunction();
        changeState('material', materialBlock, state);
    });
    optionsBlock.addEventListener('change', () => {
        calcFunction();
        changeState('options', optionsBlock, state);
    });
    promoCodeBlock.addEventListener('input', () => {
        calcFunction();
        changeState('promo', promoCodeBlock, state);
    });
};

export default calc;