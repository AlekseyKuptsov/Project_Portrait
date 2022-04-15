import {
    postData
} from "../services/requests";

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '2px solid pink';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .2)';
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';

        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else if (item.hasAttribute('data-upload')) {
            item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let name = input.files[0].name.split('.');
            name = name[0].length > 6 ? `${name[0].substring(0, 6)}...${name[1]}` : input.files[0].name;
            input.previousElementSibling.textContent = name;
            input.parentElement.querySelector('button').textContent = name;
            if (input.hasAttribute('data-upload')) {
                console.log('ok');
                const formData = new FormData();
                formData.append('file', input.files[0]);

                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(() => {
                        console.log('error');
                    })
                    .finally(() => {
                        input.previousElementSibling.textContent = 'Файл не выбран';
                        input.parentElement.querySelector('button').textContent = 'Загрузите фотографию';
                    });
            }
        });
    });

};

export default drop;