import '../css/main.scss';
import {RandomGenerator} from './random-generator';




const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};


const btnInt = document.querySelector('#randomInt');



btnInt.addEventListener('click', outputRandomInt);
