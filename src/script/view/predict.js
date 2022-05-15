import * as tf from '@tensorflow/tfjs';

let model;
async function init() {
	console.log('model loading..');
	model = await tf.loadGraphModel(
		'https://raw.githubusercontent.com/virgiawankusuma/Garbage-Classification/master/model/json/model.json'
	);
	console.log('model loaded..');
}

const IMAGENET_CLASSES = {
	0: 'Battery',
	1: 'Biological',
	2: 'Brown Glass',
	3: 'Cardboard',
	4: 'Clothes',
	5: 'Green Glass',
	6: 'Metal',
	7: 'Paper',
	8: 'Plastic',
	9: 'Shoes',
	10: 'Trash',
	11: 'White Glass',
};

async function classify(
	imgClassified,
	btnPredict,
	spinnerGrow,
	classifiedIcon,
	classifiedName
) {
	setTimeout(() => {
		spinnerGrow.classList.add('d-none');
		btnPredict.disabled = false;
		classifiedIcon.classList.remove('d-none');
		classifiedName.classList.remove('d-none');
	}, 3000);

	// action for the submit button
	let tensorImg = tf.browser
		.fromPixels(imgClassified)
		.resizeNearestNeighbor([224, 224])
		.toFloat()
		.expandDims();
	let prediction = await model.predict(tensorImg).data();
	let results = Array.from(prediction)
		.map(function (p, i) {
			return {
				probability: p,
				className: IMAGENET_CLASSES[i],
			};
		})
		.sort(function (a, b) {
			return b.probability - a.probability;
		})
		.slice(0, 5);

	console.log(JSON.stringify(results));

	let trashTypes;
	switch (results[0].className) {
		case 'Biological':
		case 'Paper':
		case 'Cardboard':
			trashTypes = 'Organik';
			break;

		default:
			trashTypes = 'Anorganik';
			break;
	}
	const jensam = document.getElementById('jensam');
	jensam.innerText = `[${results[0].className}][${trashTypes}]`;
}

export { init, classify };
