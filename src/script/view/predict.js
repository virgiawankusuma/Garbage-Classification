// import modeljson from '../../../model/model.json';
import * as tf from '@tensorflow/tfjs';

async function init() {
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/New%20folder/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/modeljson/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/model/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/API/master/test/model.json');
    // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/virgiawankusuma/nlp-in-tfjs/master/model.json');
    // console.log(model.summary());
}

const classify = (btnDefault, imgClassify) => {

    // path image
    console.log(btnDefault.value);

    // image base64
    console.log(imgClassify.src);

    const image = imgClassify.src;
    // console.log('classify button clicked');
}

export { init, classify };
