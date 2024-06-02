import Lebanon from './images/lebanon.png';
import Henry from './images/henry.jpg';
import Fischer from './images/fischer.jpg';
import Oppenheimer from './images/oppenheimer.jpg';
import MisterV from './images/yvick.png';
import './style.css';

const leb = document.createElement('img');
const titi = document.createElement('img');
const fish = document.createElement('img');
const jro = document.createElement('img');
const yv = document.createElement('img');

leb.src = Lebanon;
titi.src = Henry;
fish.src = Fischer;
jro.src = Oppenheimer;
yv.src = MisterV;

const div = document.querySelector('div>div');

div.appendChild(leb);
div.appendChild(titi);
div.appendChild(fish);
div.appendChild(jro);
div.appendChild(yv);

const images = document.querySelectorAll('img');

cycle(0);

const nextBtn = document.querySelector('button#next');
nextBtn.addEventListener('click', () => { cycle(1); });

const prevBtn = document.querySelector('button#previous');
prevBtn.addEventListener('click', () => { cycle(-1); });

function cycle(choice) {
    let counter = 0;

    images.forEach(element => {
        if (element.style.display === 'block') {
            choice += counter;
        }
        counter++;
    });

    images.forEach(element => {
        element.style.display = 'none';
    });
    
    images[(choice + 5) % 5].style.display = 'block';
}