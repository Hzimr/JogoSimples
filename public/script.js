const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const audio = document.querySelector('audio');
const button = document.querySelector('.button');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {  /*função anônima para retirar a classe jump*/ 

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudPosition = cloud.offsetLeft;

    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; 

        mario.src = '/jogosimples/public/images/game-over.png';
        mario.style.width = '50px';
        mario.style.marginLeft = '50px';

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        audio.play();

        button.hidden = false;

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);