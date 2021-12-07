import * as tf from '@tensorflow/tfjs';
// import * as mobilenet from '@tensorflow-models/mobilenet';

let model;
async function init() {
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/New%20folder/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/modeljson/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/model/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/test/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/nlp-in-tfjs/master/model.json');
    // console.log(model.summary());

    console.log("model loading..");
    model = undefined;
    model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/model.json');
    console.log("model loaded..");
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
}

async function classify(imgClassified) {

    console.log("model loading..");

    console.log(model);
    let tensor = preprocessImage(imgClassified, 'mobilenet');

    let predictions = await model.predict(tensor).data();
    let results = Array.from(predictions)
        .map(function (p, i) {
            return {
                probability: p,
                className: IMAGENET_CLASSES[i]
            };
        }).sort(function (a, b) {
            return b.probability - a.probability;
        }).slice(0, 5);

    // console.log(results[0].className);
    // console.log(results[1].className);
    // console.log(results[2].className);
    // console.log(results[3].className);
    // console.log(results[4].className);
    console.log(JSON.stringify(results));
}

function preprocessImage(imgClassified, modelName) {
    let tensor = tf.browser.fromPixels(imgClassified)
        .resizeNearestNeighbor([224, 224])
        .toFloat();

    if (modelName === undefined) {
        return tensor.expandDims();
    } else if (modelName === "mobilenet") {
        let offset = tf.scalar(127.5);
        return tensor.sub(offset)
            .div(offset)
            .expandDims();
    } else {
        alert("Nama model tidak diketahui..")
    }
}

export { init, classify };
