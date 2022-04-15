import { postData } from "../services/requests";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        select = document.querySelectorAll('select'),
        upload = document.querySelectorAll('[name="upload"]'),
        textarea = document.querySelectorAll('textarea');

    const message = {
        loading: "Загрузка...",
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let name = item.files[0].name.split('.');
            name = name[0].length > 6 ? `${name[0].substring(0, 6)}...${name[1]}` : item.files[0].name;
            item.previousElementSibling.textContent = name;
            item.parentElement.querySelector('button').textContent = name;
        });
    });

    function statusMessage(elem, messageImg, text) {
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        elem.parentNode.appendChild(statusMessage);
        elem.classList.add('animated', 'fadeOutUp');
        setTimeout(() => {
            elem.style.display = 'none';
        }, 400);

        let statusImg = document.createElement('img');
        statusImg.setAttribute('src', messageImg);
        statusImg.classList.add('animated', 'fadeInUp');
        statusMessage.appendChild(statusImg);

        let textMessage = document.createElement('div');
        textMessage.textContent = text;
        statusMessage.appendChild(textMessage);
    }

    function statusMessageRemove(elem) {
        let status = document.querySelectorAll('.status');
        status.forEach(item => item.remove());
        if (elem) {
            elem.style.display = '';
            elem.classList.remove('fadeOutUp');
            elem.classList.add('fadeInUp');
        }
    }

    const clearInputs = () => {
        input.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
            item.parentElement.querySelector('button').textContent = 'Загрузите фотографию';
        });
        textarea.forEach(item => {
            item.value = '';
        });
        select.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            statusMessage(item, message.spinner, message.loading);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'calc') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusMessageRemove();
                    statusMessage(item, message.ok, message.success);
                })
                .catch(() => {
                    statusMessageRemove();
                    statusMessage(item, message.fail, message.failure);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessageRemove(item);
                    }, 3000);
                });
        });
    });
};

export default forms;