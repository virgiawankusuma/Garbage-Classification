import "regenerator-runtime";
import "./style.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '@fortawesome/fontawesome-free/js/all.js';


const wrapper1 = document.querySelector('.wrapper-1');
const wrapper2 = document.querySelector('.wrapper-2');
const btnDefault = document.querySelector('#btn-default');
const btnCancel = document.querySelector('#btn-cancel');
const btnCustom = document.querySelector('#btn-custom');
const btnPredict = document.querySelector('#btn-predict');
const imgClassify = document.querySelector('#img-classify');
const imgClassified = document.querySelector('#img-classified');
const filename = document.querySelector('.file-name');

const regEx = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

btnCustom.addEventListener('click', () => {
    btnDefault.click();
});

btnDefault.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            imgClassify.src = result;
            wrapper1.classList.add('actived');
        }
        console.log(btnDefault.value);
        btnCancel.addEventListener('click', () => {
            window.location = '/#klasifikasikan';
            imgClassify.src = '';
            wrapper1.classList.remove('actived');
            btnDefault.value = '';
            console.log(btnDefault.value + 'sudah dihapus');


            imgClassified.src = '';
            wrapper2.classList.remove('actived');
            wrapper2.classList.remove('border-0');
        })
        reader.readAsDataURL(file);
    }

    if (this.value) {
        filename.textContent = this.value.match(regEx);
    }

    btnPredict.addEventListener('click', function () {
        window.location = '/#hasil-klasifikasi';
        wrapper2.classList.add('actived');
        wrapper2.classList.add('border-0');
        imgClassified.src = imgClassify.src;
    });
});

