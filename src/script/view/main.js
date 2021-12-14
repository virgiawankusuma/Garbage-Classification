import '../component/navbar/navigation-bar.js';
import '../component/jumbotron/jumbotron-section.js';
import '../component/classification/classify-section.js';
import '../component/author/author-section.js';
import '../component/credits/credits-section.js';

import { init, classify } from './predict';

document.addEventListener('DOMContentLoaded', init);

const main = () => {
	const wrapper1 = document.querySelector('.wrapper-1');
	const wrapper2 = document.querySelector('.wrapper-2');
	const btnDefault = document.querySelector('#btn-default');
	const btnCancel = document.querySelector('#btn-cancel');
	const btnUpload = document.querySelector('#btn-upload');
	const btnPredict = document.querySelector('#btn-predict');
	const imgClassify = document.querySelector('#img-classify');
	const imgClassified = document.querySelector('#img-classified');
	const filename = document.querySelector('.file-name');

	const classifiedIcon = document.querySelector('.file-name-classified-icon');
	const classifiedName = document.querySelector('.file-name-classified-name');

	const regEx = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

	btnUpload.addEventListener('click', () => {
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
			};
			console.log(btnDefault.value);
			btnCancel.addEventListener('click', () => {
				window.location.reload();

				imgClassify.src = '';
				wrapper1.classList.remove('actived');
				btnDefault.value = '';
				console.log(btnDefault.value + 'sudah dihapus');

				imgClassified.src = '';
				wrapper2.classList.remove('actived');
				wrapper2.classList.remove('border-0');
				classifiedIcon.classList.add('d-none');
				classifiedName.classList.add('d-none');
			});
			reader.readAsDataURL(file);
		}

		if (this.value) {
			filename.textContent = this.value.match(regEx);
		}

		btnPredict.addEventListener('click', function () {
			wrapper2.classList.add('actived');
			wrapper2.classList.add('border-0');
			imgClassified.src = imgClassify.src;
			const spinnerGrow = document.querySelector('.spinner-grow');
			spinnerGrow.classList.remove('d-none');
			btnPredict.disabled = true;

			classifiedIcon.classList.add('d-none');
			classifiedName.classList.add('d-none');

			classify(imgClassified, btnPredict, spinnerGrow, classifiedIcon, classifiedName);
		});
	});
};

export default main;
