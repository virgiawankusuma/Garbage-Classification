import * as tf from '@tensorflow/tfjs';

async function loadModel() {
  const model = tf.loadGraphModel(
		'/model/json/model.json'
	);

  // Cek model
  try {
    await model;
  } catch (error) {
    throw new Error('Model tidak ditemukan');
  }

  return model;
}

function imageClasses() {
  const classes = {
    0: 'Baterai', // 'Battery',
    1: 'Biologis',  // 'Biological',
    2: 'Kaca Coklat',  // 'Brown Glass',
    3: 'Kardus' , // 'Cardboard',
    4: 'Pakaian', // 'Clothes',
    5: 'Kaca Hijau', // 'Green Glass',
    6: 'Logam' , // 'Metal',
    7: 'Kertas', // 'Paper',
    8: 'Plastik', // 'Plastic',
    9: 'Sepatu', // 'Shoes',
    10: 'Residu', // 'Trash',
    11: 'Kaca Putih' // 'White Glass',
  };

  return classes;
}

async function classifyModel(image, setResults, setIsLoading) {
  setIsLoading(true);
  const model = await loadModel();
  const IMAGE_CLASSES = imageClasses();

	const tensorImg = tf.browser
  .fromPixels(image)
  .resizeNearestNeighbor([224, 224])
  .toFloat()
  .expandDims();
  
  const prediction = await model.predict(tensorImg).data();
  const results = Array.from(prediction).map(function (probablity, index) {
    return {
      probability: probablity,
      className: IMAGE_CLASSES[index],
    };
  })
  .sort(function (a, b) {
    return b.probability - a.probability;
  })
  .slice(0, 3);

  setResults(results);
  setIsLoading(false);
}

export default classifyModel;